"use client";
import { useEffect, useRef, useState } from "react";
import InputSendMessage from "../ui/InputSendMessage";
import { postNewMessageChatBot } from "@/helpers/chatbot";
import Button from "../ui/Button";
import { ChevronsRight, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { getHourFromDate } from "@/utils/dateConvert";
import chatBotIcon from "@/../public/icons/chatbotIcon.png"
import Image from "next/image";

const ChatSection = ({
  historyMessage,
  setHistoryMessage,
  chatId,
  className,
  setIsShowMessage
}) => {
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const bodyMessageRef = useRef(null);

  useEffect(() => {
    bodyMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [historyMessage]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (loading || !inputMessage) return;

    setLoading(true);
    try {
      setInputMessage("");
      const tempData = {
        messageId: "112233",
        role: "user",
        text: inputMessage,
        date: new Date(),
      };

      setHistoryMessage((prev) => [...prev, tempData]);
      const { chatBot, response } = await postNewMessageChatBot(
        tempData,
        chatId,
        historyMessage,
        true
      );

      if (response.data.message === "Success") {
        const botModelResponse = {
          messageId: "22331",
          role: "model",
          text: chatBot,
          date: new Date(),
        };

        const response = await postNewMessageChatBot(
          botModelResponse,
          chatId,
          historyMessage,
          false
        );

        setHistoryMessage((prev) => [...prev, botModelResponse]);
        if (response.data.message !== "Success")
          throw new Error("Gagal memasukkan pesan bot");
      } else {
        setHistoryMessage((prev) => [...prev]);
        throw new Error("Gagal mengirim pesan!");
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    
    <motion.div
      initial={{ x: 100, opacity: 0.5}}
      whileInView={{x: 0, opacity: 1}}
      transition={{type: "spring", bounce: 0.6}}
      className={`fixed h-screen md:h-[90dvh] w-full md:md:w-1/3 top-0 md:top-14 shadow-md shadow-gray-600 bg-secondary ring-1 ring-gray-500 md:right-1 rounded-xl ${className}`}
    >
      <div className="flex flex-col h-full relative min-h-full justify-between">
        <div className="p-4 bg-slate-300 rounded-b-xl text-center text-lg top-0 w-full sticky box-border text-dark flex justify-between items-center rounded-xl">
          <Button.secondary onClick={() => setIsShowMessage(false)}>
            <ChevronsRight />
          </Button.secondary>
          <div className="w-full flex justify-center items-center font-semibold">
            <h1>IMU</h1>
            <Image src={chatBotIcon} width={500} height={750} className="w-10" alt="Icon  Chat Bot" />
            <h1>Bot</h1>
          </div>
          <Button.danger>
            <Trash2 />
          </Button.danger>
        </div>
        <div className="overflow-y-scroll custom-scrollbar text-sm">
          {historyMessage?.map((message, idx) => {
            return (
              <div
                key={idx}
                className={`w-full p-4 flex ${
                  message?.role === "user" ? "justify-end" : "justify-start"
                } items-center`}
              >
                <div
                  className={`w-fit text-gray-900 bg-slate-400 p-2 rounded-md ${
                    message?.role === "user" ? "ml-10" : "mr-10"
                  }`}
                >
                  <p>{message?.text}</p>
                  <div className="w-full flex justify-end items-end text-xs">
                  <span>{getHourFromDate(message?.date)}</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* loading typing bot */}
          <div
            className={`w-full p-4 flex justify-start items-center ${
              !loading && "hidden"
            }`}
          >
            <div className="w-fit bg-slate-400 p-4 px-10 mr-10 rounded-md">
              <div className="loader-typing-chatbot"></div>
            </div>
          </div>
          <div ref={bodyMessageRef}></div>
        </div>
        <InputSendMessage
          handleChangeInput={(e) => setInputMessage(e.target.value)}
          handleSubmitForm={handleSendMessage}
          placeholder={"Masukkan pesan"}
          className={"sticky box-border bottom-0"}
          value={inputMessage}
        />
      </div>
    </motion.div>
  );
};

export default ChatSection;
