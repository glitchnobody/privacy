"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleMouseMove);
    };
  }, []);

  return (
    <main className=" h-dvh w-full bg-black overflow-hidden">
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="absolute top-0  text-white left-0 gap-5 w-full h-full flex flex-col items-center justify-center bg-black z-10"
        >
          <h1 className=" text-5xl">Are You Ready?</h1>
          <span className="  text-gray-300 text-sm">
            Click anywhere to enter
          </span>
        </div>
      )}
      <div className="flex flex-col items-center justify-center gap-4 h-full w-full">
        <video
          ref={videoRef}
          src="/privacywars.mp4"
          playsInline
          preload="auto"
          muted={false}
          onEnded={() => setVideoEnded(true)}
          className="w-full aspect-video h-auto max-h-[70vh] object-contain "
        ></video>
        {videoEnded && (
          <button className="bg-pink-600 text-white hover:bg-pink-800 active:bg-pink-600 min-w-[200px] px-4 py-2 rounded-lg ">
            <a href="">CTA</a>
          </button>
        )}
      </div>
    </main>
  );
}
