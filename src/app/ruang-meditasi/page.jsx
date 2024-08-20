"use client";

import { useState, useRef } from "react";
import Timer from "@/components/Timer";
import SpotifyPlayer from "@/components/spotifyPlayer";
import AlarmPopup from "@/components/AlarmPopup";
import Image from "next/image";

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
          <SpotifyPlayer playlistId="6lQ65wGEiElILKiDBzY5WS?utm_source=generator" />
        </div>
      </div>

      <div className="mt-8 max-w-md text-center px-4">
        <p className="text-base text-[var(--title-color)] mb-6">
          Nikmati musik meditasi yang dirancang khusus untuk membantu Anda
          merasa lebih tenang dan fokus. Playlist ini mencakup berbagai trek
          yang dirancang untuk mendukung pengalaman meditasi Anda.
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center md:flex-row justify-center gap-8">
        <Image
          src="/meditasi.jpg"
          alt="Meditasi"
          className="w-60 h-36 object-cover rounded-lg shadow-lg"
          width={240}
          height={144}
        />

        <div className="flex-1 max-w-md text-center">
          <h2 className="text-lg font-semibold mb-6 text-[var(--title-color)]">
            Tips Meditasi:
          </h2>
          <ul className="list-disc list-inside text-[var(--title-color)] text-sm text-left">
            <li className="mb-3 pl-6">
              Temukan tempat yang tenang dan nyaman.
            </li>
            <li className="mb-3 pl-6">
              Fokus pada pernapasan Anda dan biarkan pikiran Anda tenang.
            </li>
            <li className="pl-6">
              Gunakan musik untuk membantu menciptakan suasana yang damai.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IntervalMeditationPage;
