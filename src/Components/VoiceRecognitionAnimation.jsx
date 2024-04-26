import React from 'react';

function getDelay(index) {
  if (index % 7 === 0) return 0.2 * (index / 9);
  return 0.3 * (index % 6);
}

function getLinearDelay(index) {
  return 0.18 * index;
}

function VoiceRecognitionAnimation({ animation, variant = "light" }) {
  return (
    <div className="flex h-[60px] items-center gap-1">
      {Array.from({ length: 28 }).map((_, i) => (
        <div
          key={i}
          className={`inline-block min-h-1 w-1 rounded-full ${variant === "dark" ? "bg-gray-400" : "bg-white"}`}
          style={{
            animation: animation !== "none" ? `voice 1s ${animation === "recording" ? getDelay(i) : getLinearDelay(i)}s infinite` : "none",
          }}
        ></div>
      ))}
    </div>
  );
}

export default VoiceRecognitionAnimation;
