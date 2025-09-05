export const maxDuration = 60;

import { GoogleGenerativeAI } from "@google/generative-ai";
import connectDB from "@/config/db";
import Chat from "@/models/Chat";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { getSystemInstruction } from "@/config/systemInstructions";

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req){
    console.log("🔥 POST handler called");
    try {
        const {userId} = getAuth(req)
        console.log("✅ Auth extracted:", userId);

        // Extract chatId, prompt, and optional systemType from the request body
        const { chatId, prompt, systemType = 'default' } = await req.json();
        console.log("✅ Body:", chatId, prompt, systemType);

        if(!userId){
            console.log("❌ User not authenticated");
            return NextResponse.json({
                success: false,
                message: "User not authenticated",
            });
        }

        // Find the chat document in the database based on userId and chatId
        await connectDB();
        console.log("✅ DB Connected");

        const data = await Chat.findOne({userId, _id: chatId})
        console.log("✅ Chat found:", data);

        if (!data) {
            console.log("❌ Chat not found");
            return NextResponse.json({ success: false, message: "Chat not found" });
          }

        
        // Create a user message object
        const userPrompt = {
            role: "user",
            content: prompt,
            timestamp: Date.now()
        };

        data.messages.push(userPrompt);
        await data.save();

        console.log("message",prompt);
        
        // Get the model with system instruction
        const systemInstruction = getSystemInstruction(systemType);
        const model = genAI.getGenerativeModel({ 
            model: "gemini-2.5-flash",
            systemInstruction: systemInstruction
        });

        // Prepare conversation history for Gemini API
        const history = [];
        
        // Add conversation history from the chat (excluding the just added user message)
        for (let i = 0; i < data.messages.length - 1; i++) {
            const msg = data.messages[i];
            if (msg.role === "user") {
                history.push({
                    role: "user",
                    parts: [{ text: msg.content }]
                });
            } else if (msg.role === "assistant") {
                history.push({
                    role: "model",
                    parts: [{ text: msg.content }]
                });
            }
        }

        // Start a chat session with history
        const chat = model.startChat({
            history: history
        });

        // Send the current message
        const result = await chat.sendMessage(prompt);
        const response = await result.response;
        const responseText = response.text();

        // Create assistant message object
        const message = {
            role: "assistant",
            content: responseText,
            timestamp: Date.now()
        };

        data.messages.push(message);
        console.log("Before save:", data.messages);
        data.markModified("messages");
        await data.save();
        console.log("After save:", data.messages);

        return NextResponse.json({success: true, data: message})

    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
}