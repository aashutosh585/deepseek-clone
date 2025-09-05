/**
 * Test script to verify Gemini API integration with system instructions
 * 
 * This demonstrates the equivalent of your curl example:
 * curl https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent
 * 
 * But using our application's API with system instructions
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
import { getSystemInstruction } from "../config/systemInstructions.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function testGeminiIntegration() {
  try {
    console.log("🧪 Testing Gemini API integration...");
    
    // Test with cat personality (matching your example)
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      systemInstruction: getSystemInstruction('cat')
    });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "Hello" }]
        },
        {
          role: "model", 
          parts: [{ text: "Meow! *purrs* Hello there, human! I'm Neko. *stretches paws* What can this cat help you with today?" }]
        }
      ]
    });

    // Send the test message from your example
    const result = await chat.sendMessage("I have two dogs in my house. How many paws are in my house?");
    const response = await result.response;
    const responseText = response.text();

    console.log("✅ Cat AI Response:", responseText);

    // Test with default personality  
    const defaultModel = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      systemInstruction: getSystemInstruction('default')
    });

    const defaultResult = await defaultModel.generateContent("I have two dogs in my house. How many paws are in my house?");
    const defaultResponse = await defaultResult.response;
    const defaultText = defaultResponse.text();

    console.log("✅ Default AI Response:", defaultText);

    console.log("🎉 Test completed successfully!");
    
  } catch (error) {
    console.error("❌ Test failed:", error.message);
  }
}

// Uncomment to run the test
// testGeminiIntegration();

export { testGeminiIntegration };
