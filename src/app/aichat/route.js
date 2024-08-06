// Make sure to include these imports:
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.AI_CHAT);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Write a story about a magic backpack."; // kasi prompt disini

const result = await model.generateContent(prompt); //output
console.log(result.response.text());