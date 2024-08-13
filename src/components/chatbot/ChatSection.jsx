"use client";
import { useEffect, useRef, useState } from "react";
import InputSendMessage from "../ui/InputSendMessage";
import { postNewMessageChatBot } from "@/helpers/chatbot";
import Button from "../ui/Button";
import { ChevronsRight, SquareX, Trash2 } from "lucide-react";

const ChatSection = ({
  historyMessage,
  setHistoryMessage,
  chatId,
  className,
}) => {
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const bodyMessageRef = useRef(null);

  useEffect(() => {
    bodyMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [historyMessage]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (loading) return;

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
    
    <div
      className={`fixed h-[90dvh] w-1/3 borde-2 border-black bg-gray-800 right-0 rounded-xl ${className}`}
    >
      <div className="flex flex-col h-full relative min-h-full justify-between">
        <div className="p-4 bg-slate-300 rounded-b-xl text-center text-lg top-0 w-full sticky box-border text-black flex justify-between items-center rounded-xl">
          <Button.secondary>
            <ChevronsRight />
          </Button.secondary>
          <h1>FesBot</h1>
          <Button.danger>
            <Trash2 />
          </Button.danger>
        </div>
        <div className="overflow-y-scroll custom-scrollbar">
          {historyMessage?.map((message, idx) => {
            return (
              <div
                key={idx}
                className={`w-full p-4 flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                } items-center`}
              >
                <div
                  className={`w-fit text-gray-900 bg-slate-400 p-2 rounded-md ${
                    message.role === "user" ? "ml-10" : "mr-10"
                  }`}
                >
                  <p>{message.text}</p>
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
    </div>
  );
};

export default ChatSection;
