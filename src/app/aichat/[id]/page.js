"use client";

import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { generateChatContent } from "@/libs/chatBot/chatBotGenerate";
import { getChatBotRoom, postChatBotRoom, postNewMessageChatBot } from "@/helpers/chatbot";
import axiosInstance from "@/libs/axiosInterface";
import ChatSection from "@/components/chatbot/ChatSection";

const AIChat = ({params}) => {
    const [historyMessage, setHistoryMessage] = useState([]);
    const chatId = params.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getChatBotRoom(chatId);
                setHistoryMessage(result.data.data.message);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);


    const handleCreateRoom = async () => {
        try {
            const data = {
                chatId: "tesing",
                message: []
            }

            const response = await postChatBotRoom(data);
            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div className="w-full bg-slate-50 text-gray-900 min-h-screen relative ">
            <ChatSection historyMessage={historyMessage} setHistoryMessage={setHistoryMessage} chatId={chatId} className={"rounded-md"} />
            <div className="">
                <div>
                    <h1>Testing adlkasjkdsa sd a</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat magni obcaecati dignissimos architecto nihil sint earum autem exercitationem necessitatibus aperiam, ad corporis nulla placeat amet voluptatibus itaque nostrum perspiciatis corrupti!</p>
                </div>
                <button onClick={handleCreateRoom}>
                    createRoom
                </button>
                <button onClick={() => console.log(historyMessage)}>
                    Log
                </button>
            </div>
        </div>
    );
}

export default AIChat;
