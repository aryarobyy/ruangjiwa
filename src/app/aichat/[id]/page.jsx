"use client";

import React, { useState, useEffect } from "react";
import { getChatBotRoom, postChatBotRoom } from "@/helpers/chatbot";
import ChatSection from "@/components/chatbot/ChatSection";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import LoadingChildren from "@/components/system/LoadingChildren";
import chatBotIcon from "@/../public/icons/chatbotIcon.png"
import Image from "next/image";
import useToast from "@/hooks/useHotToast";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";

const AIChat = ({params}) => {
    const [historyMessage, setHistoryMessage] = useState(null);
    const [isShowMessage, setIsShowMessage] = useState(false);
    
    // loading
    const [loadingGetMessage, setLoadingGetMessage] = useState(false);
    const [loadingCreateRoom, setLoadingCreateRoom] = useState(false);

    const route = useRouter();
    const {user} = useAuth();
    const chatId = params.id;

    const { pushToast, updateToast} = useToast();

    useEffect(() => {
      if(user) {
        getHistoryMessage();
      }
      }, []);
      
    const getHistoryMessage = async () => {
      setLoadingGetMessage(true);
        try {
            const result = await getChatBotRoom(chatId);
            setHistoryMessage(result.data.data?.message);
        } catch (error) {
          pushToast({
            isError: true,
            message: "Sepertinya IMU gagal memuat obrolan..."
          })
            console.error("Error fetching data: ", error);
        } finally {
          setLoadingGetMessage(false);
        }
    };

    // handler function
    const handleShowMessage = async () => {
      if(loadingGetMessage) {
        const toastId = pushToast({
          isLoading: true,
          message: "Imubot sedang memuat obrolan kamu nih! Coba lagi nanti ya!"
        })

        setTimeout(() => {
          updateToast({
            toastId,
            message: "Yuk Coba lagi!"
          });
        }, 3000);
        return;
      };

        // if authenticated
        if(user) {
          if(!historyMessage) {
            try {
              await handleCreateRoom();
              setIsShowMessage(true);
            } catch (error) {
              console.error(error.message);
              // toast;
            }
            return;
          }

          setIsShowMessage(true);
        } else {
          route.push('/auth/login');
        };

    };

    const handleCreateRoom = async () => {
      const toastId = pushToast({
        isLoading: true,
        message: "Membuat Obrolan..."
      });
      setLoadingCreateRoom(true);
        try {
            const data = {
                chatId: chatId,
                message: []
            }

            const response = await postChatBotRoom(data);
            if(response.data.message !== 'Success') {
              throw new Error("Gagal Membuat Obrolan");
            } else {
              await getHistoryMessage();
            };
            updateToast({
              toastId,
              message: "Berhasil Membuat Obrolan"
            })
        } catch (error) {
            console.error(error.message);
            updateToast({
              toastId,
              isError: true,
              message: error.message
            })
        } finally {
          setLoadingCreateRoom(false);
        }
    }

    return (
      <>
        <Navbar />
        <div className="w-full bg-[var(--hero-bg-color)] min-h-screen relative flex flex-col-reverse md:flex md:flex-row gap-2">
          <ChatSection
            historyMessage={historyMessage}
            setHistoryMessage={setHistoryMessage}
            isShowMessage={isShowMessage}
            setIsShowMessage={setIsShowMessage}
            chatId={chatId}
            className={`rounded-md ${isShowMessage ? "" : "hidden"}`}
          />
          <div className="w-full md:w-2/3">
            <div className="w-full md:p-6">
              <div className="w-full text-center font-semibold text-xl text-[var(--title-color)] p-4">
                <h1>Atasi Kesepianmu dengan ChatBot IMU</h1>
              </div>
              <div className="text-base text-justify flex flex-col gap-2 p-4 text-[var(--title-color)]">
                <h3 className="px-4 text-lg font-semibold">Tahukah kamu ?</h3>
                <p>
                  Tahu nggak sih, sekitar 80% dari kita semua pasti pernah merasa
                  kesepian? Tapi santai aja, itu normal kok. Kesepian adalah
                  perasaan yang dialami hampir semua orang, terutama kita para
                  remaja. Bahkan, meskipun kita punya banyak teman atau lagi asyik
                  di media sosial, kesepian tetap bisa datang tanpa diundang.
                </p>
                <p>
                  Yang menarik, ternyata remaja dan anak muda kayak kita ini
                  justru yang paling sering merasa kesepian. Kebayang nggak,
                  sekitar 40% dari kita merasa kesepian hampir setiap hari?
                  Masa-masa remaja memang seru, tapi juga penuh dengan perubahan
                  dan pencarian jati diri, dan kadang-kadang, itu bikin kita
                  merasa sendirian di tengah keramaian.
                </p>
                <p>
                  Nah, yang perlu kamu tahu, kesepian bukan cuma bikin galau.
                  Kalau dibiarkan terus, kesepian bisa berdampak buruk buat
                  kesehatan mental dan fisik kita, lho! Mulai dari bikin stres,
                  depresi, sampai gangguan tidur. Bahkan ada yang bilang, efek
                  kesepian itu bisa <span className="font-semibold">seburuk merokok 15 batang sehari!</span> Serem, kan?
                </p>
                <p>
                  Tapi tenang, di platform ini kamu
                  bisa chat dengan AI yang siap dengerin curhatanmu kapan aja.
                  Nggak perlu takut dihakimi, AI ini bakal jadi teman ngobrol yang
                  selalu ada, siap menemani kamu di saat-saat sepi. Yuk, mulai chat dengan AI kita, dan
                  temukan sahabat yang selalu ada buat kamu, di mana pun dan kapan
                  pun. Di dunia yang semakin terhubung ini, nggak ada alasan buat
                  merasa sendiri!
                </p>
              </div>
            </div>
          </div>

          <div className=" md:w-1/4 text-dark md:pt-20">
            <div className="w-full p-6 flex flex-col gap-6 justify-center items-center">
              <div className="text-lg font-semibold w-full text-center flex flex-col justify-center items-center">
                <Image src={chatBotIcon} width={600} height={750} className="h-36 md:h-56 w-fit"  alt="Icon ChatBot"  />
                  <h1 className="text-[var(--title-color)]">Yuk! Mulai chat sama aku</h1>
              </div>
              <div className="w-fit flex flex-col justify-center items-center gap-2">
                {
                  loadingCreateRoom ? (
                    <>
                      <span className="font-semibold">Membuat Obrolan</span>
                      <div>
                        <LoadingChildren />
                      </div>
                    </>
                  ):(
                    <Button onClick={handleShowMessage}>
                        { !historyMessage ? "Buat Obrolan" : "Mulai Obrolan"}
                    </Button>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default AIChat;
