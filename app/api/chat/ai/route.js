export const maxDuration = 60;

import OpenAI from "openai";
import connectDB from "@/config/db";
import Chat from "@/models/Chat";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Initialize OpenAI client with DeepSeek API key and base URL
const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: process.env.DEEPSEEK_API_KEY
});

export async function POST(req){
    console.log("🔥 POST handler called");
    try {
        const {userId} = getAuth(req)
        console.log("✅ Auth extracted:", userId);

        // Extract chatId and prompt from the request body
        const { chatId, prompt } = await req.json();
        console.log("✅ Body:", chatId, prompt);

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
        
        // Call the DeepSeek API to get a chat completion
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: prompt }],
            model: "deepseek-chat",
        });

        const message = completion.choices[0].message;

        message.timestamp = Date.now()
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