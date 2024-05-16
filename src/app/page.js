"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import LoaderImage from "./image.jpg";
import Link from "next/link";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    const handleFirstClick = () => {
      if (videoRef.current && !hasPlayed) {
        videoRef.current.play();
        setHasPlayed(true);
      }
    };

    window.addEventListener("click", handleFirstClick);

    return () => {
      window.removeEventListener("click", handleFirstClick);
    };
  }, [hasPlayed]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <main className=" h-dvh w-full bg-black overflow-hidden">
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className=" cursor-pointer absolute top-0  text-white left-0 gap-5 w-full h-full flex flex-col items-center justify-center bg-black z-10"
        >
          <div className=" cursor-pointer rounded-md overflow-hidden w-[400px] aspect-[384/128] relative">
            <Image
              src={LoaderImage}
              fill
              alt="loader image"
              className="object-contain object-center"
            />
          </div>
          <h1 className=" text-5xl">Are You Ready?</h1>
          <span className="  text-gray-300 text-sm">
            Click anywhere to enter
          </span>
        </div>
      )}
      <div className="flex flex-col items-center justify-center gap-9 h-full w-full">
        <div className=" w-full aspect-video h-auto max-h-[70vh]">
          <video
            ref={videoRef}
            src="/privacywars.mp4"
            playsInline
            preload="auto"
            muted={false}
            onEnded={() => setVideoEnded(true)}
            className=" w-full h-full object-contain "
          ></video>
          <div className=" flex w-full items-end justify-center gap-10">
            <button className=" text-gray-400" onClick={togglePlay}>
              {isPlaying ? "Pause" : "Play"}
            </button>
            <button className=" text-gray-400" onClick={toggleMute}>
              {isMuted ? "Unmute" : "Mute"}
            </button>
            <button
              className=" text-gray-400"
              onClick={() =>
                videoRef.current &&
                (videoRef.current.currentTime = videoRef.current.duration)
              }
            >
              Skip
            </button>
          </div>
        </div>

        {videoEnded && (
          <Link href="/question">
            <button className="   bg-cyan-950 text-white px-12 h-fit py-2 rounded-full">
              Get Started
            </button>
          </Link>
        )}
      </div>
    </main>
  );
}
