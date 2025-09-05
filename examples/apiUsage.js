/**
 * Example usage of the Gemini API with different system instructions
 * 
 * This file demonstrates how to make API calls to the chat endpoint
 * with different system instruction types.
 */

// Example API call structure for the frontend

// 1. Default AI Assistant
const defaultCall = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    chatId: 'your-chat-id',
    prompt: 'Explain quantum computing',
    systemType: 'default' // or omit for default
  })
};

// 2. Coding Assistant
const codingCall = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    chatId: 'your-chat-id',
    prompt: 'Write a React component for a todo list',
    systemType: 'coding'
  })
};

// 3. Creative Writing Assistant
const creativeCall = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    chatId: 'your-chat-id',
    prompt: 'Write a short story about a time traveler',
    systemType: 'creative'
  })
};

// 4. Cat Personality (like your example)
const catCall = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    chatId: 'your-chat-id',
    prompt: 'I have two dogs in my house. How many paws are in my house?',
    systemType: 'cat'
  })
};

// Usage in React component:
/*
const sendMessage = async (prompt, systemType = 'default') => {
  try {
    const response = await fetch('/api/chat/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chatId: currentChatId,
        prompt: prompt,
        systemType: systemType
      })
    });
    
    const data = await response.json();
    if (data.success) {
      console.log('AI Response:', data.data.content);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
*/

export { defaultCall, codingCall, creativeCall, catCall };
