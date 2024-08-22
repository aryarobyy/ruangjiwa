import React from "react";

const AlarmPopup = ({ show, onStop }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[var(--hero-bg-color)] p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-[var(--title-color)]">
          Alarm Berbunyi!
        </h2>
        <p className="mb-6">Waktu meditasi telah selesai.</p>
        <button
          onClick={onStop}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Hentikan Ringtone
        </button>
      </div>
    </div>
  );
};

export default AlarmPopup;
