// AI Chatbot service
// Simulated responses - replace with Gemini API in production

const responses = {
  'melanoma': 'Melanoma is a serious form of skin cancer. It\'s important to see a dermatologist immediately if you suspect melanoma. Early detection is crucial for successful treatment.',
  'skin cancer': 'There are several types of skin cancer including melanoma, basal cell carcinoma, and squamous cell carcinoma. Regular skin checks and sun protection are important for prevention.',
  'sunscreen': 'Apply broad-spectrum SPF 30+ sunscreen daily, even on cloudy days. Reapply every 2 hours when outdoors.',
  'mole': 'Monitor moles for changes using the ABCDE rule: Asymmetry, Border irregularity, Color variation, Diameter >6mm, Evolution over time.',
  'treatment': 'Treatment depends on the diagnosis. Options may include surgery, cryotherapy, topical medications, or radiation. Always consult with a dermatologist for proper treatment.',
};

export const sendMessage = async (message) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lowerMessage = message.toLowerCase();
      
      // Find matching response
      let reply = 'I\'m here to help! Please ask me about skin conditions, symptoms, or general skin health. For specific medical advice, always consult a healthcare professional.';
      
      for (const [key, value] of Object.entries(responses)) {
        if (lowerMessage.includes(key)) {
          reply = value;
          break;
        }
      }

      resolve({
        text: reply,
        timestamp: new Date().toISOString(),
        sender: 'bot',
      });
    }, 1000);
  });
};

// TODO: Replace with Gemini API:
/*
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const sendMessage = async (message) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(message);
  const response = await result.response;
  return {
    text: response.text(),
    timestamp: new Date().toISOString(),
    sender: 'bot',
  };
};
*/
