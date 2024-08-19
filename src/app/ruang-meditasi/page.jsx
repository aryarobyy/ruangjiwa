"use client";

import { useState, useRef } from "react";
import Timer from "@/components/Timer";
import SpotifyPlayer from "@/components/spotifyPlayer";
import AlarmPopup from "@/components/AlarmPopup";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const IntervalMeditationPage = () => {
  const [time, setTime] = useState(5); // Default waktu 5 menit
  const [isRunning, setIsRunning] = useState(false);
  const [countdown, setCountdown] = useState(time * 60);
  const [showPopup, setShowPopup] = useState(false);

  const audioRef = useRef(null);

  const playRingtone = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setShowPopup(true);
    }
  };

  const stopRingtone = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setShowPopup(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[var(--hero-bg-color)] p-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-[var(--title-color)]">
          Ruang Meditasi
        </h1>

        <div className="w-full max-w-2xl flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex-1">
            <Timer
              time={time}
              setTime={setTime}
              isRunning={isRunning}
              setIsRunning={setIsRunning}
              countdown={countdown}
              setCountdown={setCountdown}
              onTimeUp={playRingtone} // Callback ketika waktu habis
            />
          </div>
          <div className="flex-1 flex flex-col items-center">
            <SpotifyPlayer playlistId="3n8A5uY1HMwxJBVjKmSSYa" />
          </div>
        </div>

        <div className="mt-6 max-w-md text-center">
          <p className="text-base text-[var(--title-color)]">
            Nikmati musik meditasi yang dirancang khusus untuk membantu Anda
            merasa lebih tenang dan fokus. Playlist ini mencakup berbagai trek
            yang dirancang untuk mendukung pengalaman meditasi Anda.
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center md:flex-row justify-center gap-6">
          <Image
            src="/meditasi.jpg"
            alt="Meditasi"
            className="w-48 h-32 object-cover rounded-lg shadow-sm"
            width={192}
            height={128}
          />

          <div className="flex-1 max-w-md text-center">
            <h2 className="text-lg font-semibold mb-4 text-[var(--title-color)]">
              Tips Meditasi:
            </h2>
            <ul className="list-disc list-inside text-[var(--title-color)] text-sm text-left flex flex-wrap">
              <li className="pl-4 -indent-5">
                Temukan tempat yang tenang dan nyaman.
              </li>
              <li className="pl-4 -indent-5">
                Fokus pada pernapasan Anda dan biarkan pikiran Anda tenang.
              </li>
              <li className="pl-4 -indent-5">
                Gunakan musik untuk membantu menciptakan suasana yang damai.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntervalMeditationPage;
