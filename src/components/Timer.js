"use client";
import { useState, useEffect } from "react";

const Timer = ({ time, setTime, isRunning, setIsRunning, countdown, setCountdown }) => {
  useEffect(() => {
    let timerInterval;
    if (isRunning && countdown > 0) {
      timerInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsRunning(false);
      clearInterval(timerInterval);
    }
    return () => clearInterval(timerInterval);
  }, [isRunning, countdown, setCountdown, setIsRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setCountdown(time * 60);
  };

  const handleChangeTime = (e) => {
    const newTime = parseInt(e.target.value, 10);
    setTime(newTime);
    setCountdown(newTime * 60);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center space-x-4 mb-6 text-black">
        <label className="text-lg">Waktu Meditasi (menit):</label>
        <input
          type="number"
          value={time}
          onChange={handleChangeTime}
          className="p-2 border rounded-md w-20 text-center"
          min="1"
          max="60"
        />
      </div>

      <div className="text-4xl font-bold mb-6 text-black">
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
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
        >
          Mulai
        </button>
        <button
          onClick={resetTimer}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
