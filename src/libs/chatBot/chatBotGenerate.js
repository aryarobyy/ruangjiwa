import { GoogleGenerativeAI } from "@google/generative-ai";

const geminiApiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY; 

export const generateChatContent = async (prompt, historyMessage) => {
    const chatSettings = [

    ];
    const geAi = new GoogleGenerativeAI(geminiApiKey);

    // chat setting in param2
    const model = geAi.getGenerativeModel({model: "gemini-1.5-flash"});

    const newPromt = prompt+". Balas percakapan saya seperti teman saja."
    
    if(historyMessage && historyMessage.length>1) {
        const chat = model.startChat({
            history: historyMessage,
        })
        const result = await chat.sendMessage(prompt);
        return result.response.text();
    } else {
        const result = await model.generateContent(newPromt);
        return result.response.text();
    };
}