import Image from "next/image";

export default function Home() {
  return (
    <main className=" h-dvh w-full bg-black">
      <div className="flex flex-col items-center justify-center gap-4 h-full w-full">
        <video
          autoPlay
          src="/projection.mp4"
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-dvh max-h-[80dvh] object-center object-cover"
        ></video>
        <button className="bg-pink-600 text-white hover:bg-pink-800 active:bg-pink-600 min-w-[200px] px-4 py-2 rounded-lg ">
          <a href="">CTA</a>
        </button>
      </div>
    </main>
  );
}
