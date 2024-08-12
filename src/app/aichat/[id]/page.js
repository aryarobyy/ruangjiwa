"use client";

import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { generateChatContent } from "@/libs/chatBot/chatBotGenerate";
import { getChatBotRoom, postChatBotRoom, postNewMessageChatBot } from "@/helpers/chatbot";
import axiosInstance from "@/libs/axiosInterface";

const AIChat = ({params}) => {
    const [result, setResult] = useState("");
    const [inputMessage, setInputMessage] = useState('');
    const [historyMessage, setHistoryMessage] = useState([]);

    const chatId = params.id;

    const history = [
        {
            role: 'user',
            parts: [{text: "Apakah aku bisa menjadi progammer sejati?"}]
        },
        {
            role: 'model',
            parts: [{text: "Tenang saja, kamu mungkin bisa menjadi programmer sejati!"}]
        },
        {
            role: 'user',
            parts: [{text: "Semoga, mungkin suatu saat nanti aku bisa menjadi programmer iya kan?"}]
        },
        {
            role: "model",
            parts: [{text: "Pasti mungkin! Karena tidak ada hal yang mustahil di dunia ini!"}]
        }
    ]
    

    const handleSendMessage = async (e) => {
        e.preventDefault();
        try {
            // const chat = await generateChatContent(promt, history);
            const tempData = {
                messageId: "112233",
                role: 'user',
                text: inputMessage,
                date: new Date()
            };

            setHistoryMessage(prev => ([...prev, tempData]));
            const {chatBot, response} = await postNewMessageChatBot(tempData, chatId, historyMessage, true);

            console.log(response);

            if(response.data.message === 'Success') {
                const botModelResponse = {
                    messageId: "22331",
                    role: "model",
                    text: chatBot,
                    date: new Date(),
                };

                setHistoryMessage(prev => ([...prev, botModelResponse]));

                const response = await postNewMessageChatBot(botModelResponse, chatId, historyMessage, false);
                if(response.data.message !== 'Success') throw new Error("Gagal memasukkan pesan bot");
            } else {
                setHistoryMessage(prev => [...prev]);
                throw new Error("Gagal mengirim pesan!");
            };

        } catch (error) {
            console.error(error.message);
        } finally {
            setInputMessage('');
        }
    }

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

    return (
        <div className="w-full bg-slate-200 relative">
            <div className="fixed h-[90dvh] w-1/3 borde-2 border-black bg-gray-800 right-0 rounded-xl">
                <div className="flex flex-col gap-2 overflow-y-scroll h-full relative min-h-full justify-between">
                    <div className="p-4 bg-slate-300 rounded-b-xl text-center text-lg top-0 w-full sticky box-border text-black">
                        <h1>FesBot</h1>
                    </div>
                    {
                        historyMessage?.map((message, idx) => {
                            return <div key={idx} className={`w-full p-4 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} items-center`}>
                                <div className={`w-fit text-gray-900 bg-slate-400 p-2 rounded-md ${message.role === 'user' ? 'ml-10' : 'mr-10'}`}>
                                    <p>{message.text}</p>
                                </div>
                                </div>
                        })
                    }
                    <form className="p-4 bg-slate-300 w-full sticky rounded-t-lg active:ring-0 text-black box-border bottom-0" onSubmit={handleSendMessage}>
                        <input className="w-full p-2 px-3 rounded-lg" type="text" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} placeholder="Masukkan pesan" />

                    </form>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <button onClick={handleCreateRoom}>
                    createRoom
                </button>
                <button onClick={() => console.log(historyMessage)}>
                    Log
                </button>
            </div>
            <input type="text" value={inputMessage} className="w-full h-8 text-gray-900 px-2" onChange={(e) => setInputMessage(e.target.value)} />
            <button onClick={handleSendMessage}>Submit</button>
        </div>
    );
}

export default AIChat;
