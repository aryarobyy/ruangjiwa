'use client'

import { Input } from "../ui/Input";
import {  LuSendHorizonal } from "react-icons/lu";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import { sendMessageKonsul } from "@/helpers/konsul";

const MessageKonsulCard = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState('')
  
  useEffect(() => {
    const eventSource = new EventSource('/api/konsul/testingId');
    
    eventSource.onmessage = event => {
      // const newMessage = JSON.parse(event.data);
      console.log("event:", event);
    }

    eventSource.onerror = (err) => {
      console.error('SSE error:', err);
    };

    return () => {
      eventSource.close(); // Cleanup the event source on component unmount
    };
  }, [])

  const handleSendMessage = async (e) => {
    e.preventDefault()

    try { 
      await sendMessageKonsul('testingId', message);
      setMessage('');
      alert('success send message')
    } catch (error) {
      console.error('send message: ',error.message)
    }
  };

  return (
    <>
      <div className="w-full border rounded-md">
        <div className="w-full text-center font-semibold text-base p-4 border-2">
          <h1>Puan Maharani</h1>
        </div>
        <div className="max-h-80 overflow-auto rounded-lg">
          {Array(100)
            .fill(null)
            .map((e, idx) => (
              <p key={idx}>Lorem</p>
            ))}
        </div>
        <form action="" className="flex gap-2 items-center" onSubmit={handleSendMessage}>
            <Input className="w-full" placeholder="Masukkan pesan" onChange={(e) => setMessage(e.target.value)} />
            <Button className={"w-fit h-full"} onClick={handleSendMessage}>
                <LuSendHorizonal />
            </Button>
        </form>
      </div>
    </>
  );
};

export default MessageKonsulCard;
