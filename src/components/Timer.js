"use client";
import { useState, useEffect, useRef } from "react";
import AlarmPopup from "./AlarmPopup";

const Timer = ({ time, setTime, isRunning, setIsRunning, countdown, setCountdown }) => {
  const audioRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    let timerInterval;
    if (isRunning && countdown > 0) {
      timerInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsRunning(false);
      clearInterval(timerInterval);
      playRingtone();
      setShowPopup(true); // tampil popup jika timer habis
    }
    return () => clearInterval(timerInterval);
  }, [isRunning, countdown, setCountdown, setIsRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setCountdown(time * 60);
    setShowPopup(false); // Hide popup jika timer habis
  };

  const handleChangeTime = (e) => {
    const newTime = parseInt(e.target.value, 10);
    setTime(newTime);
    setCountdown(newTime * 60);
  };

  const playRingtone = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const stopRingtone = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setShowPopup(false); // Hide popup jika ringtone stop
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center space-x-4 mb-6 text-[var(--title-color)]">
        <label className="text-lg">Waktu Meditasi (menit):</label>
        <div className="text-black">
        <input
          type="number"
          value={time}
          onChange={handleChangeTime}
          className="p-2 border rounded-md w-20 text-center"
          min="1"
          max="60"
        /></div>
      </div>

      <div className="text-4xl font-bold mb-6 text-[var(--title-color)]">
        {`${Math.floor(countdown / 60)
          .toString()
          .padStart(2, '0')}:${(countdown % 60)
          .toString()
          .padStart(2, '0')}`}
      </div>

      <div className="flex space-x-4">
        <button
          onClick={startTimer}
          disabled={isRunning}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md"
        >
          Mulai
        </button>
        <button
          onClick={resetTimer}
          className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-6 rounded-full shadow-md"
        >
          Reset
        </button>
      </div>

      {/* Elemen audio untuk play ringtone */}
      <audio ref={audioRef} src="/alarm.mp3" preload="auto" />

      {/* Alarm Popup */}
      <AlarmPopup show={showPopup} onStop={stopRingtone} />
    </div>
  );
};

export default Timer;
