"use client";

import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const AIChat = () => {
    const [result, setResult] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const genAI = new GoogleGenerativeAI(process.env.AI_CHAT_API);
                
                const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
                const prompt = "Write a story about a magic backpack."; // input ini tinggal sambungin aja
                const response = await model.generateContent(prompt); // output ini tinggal sambungin

                setResult(response.response.text);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>AI Generated Story</h1>
            <p className="text-white">Result: {result}</p>
        </div>
    );
}

export default AIChat;
