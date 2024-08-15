"use client";

import { useState } from "react";
import Timer from "@/components/Timer";
import SpotifyPlayer from "@/components/spotifyPlayer";
import Image from "next/image";

const IntervalMeditationPage = () => {
    const [time, setTime] = useState(5); // Default waktu 5 menit
    const [isRunning, setIsRunning] = useState(false);
    const [countdown, setCountdown] = useState(time * 60);
  
    return (
      <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-black">Ruang Meditasi</h1>
        
        <div className="w-full max-w-2xl flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex-1">
            <Timer
              time={time}
              setTime={setTime}
              isRunning={isRunning}
              setIsRunning={setIsRunning}
              countdown={countdown}
              setCountdown={setCountdown}
            />
          </div>
          <div className="flex-1 flex flex-col items-center">
            <SpotifyPlayer playlistId="3n8A5uY1HMwxJBVjKmSSYa" />
          </div>
        </div>
  
        <div className="mt-6 max-w-md text-center">
          <p className="text-base text-gray-700">
            Nikmati musik meditasi yang dirancang khusus untuk membantu Anda merasa lebih tenang dan fokus. Playlist ini mencakup berbagai trek yang dirancang untuk mendukung pengalaman meditasi Anda.
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
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Tips Meditasi:</h2>
            <ul className="list-disc list-inside text-gray-600 text-sm">
              <li>Temukan tempat yang tenang dan nyaman.</li>
              <li>Fokus pada pernapasan Anda dan biarkan pikiran Anda tenang.</li>
              <li>Gunakan musik untuk membantu menciptakan suasana yang damai.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

export default IntervalMeditationPage;
