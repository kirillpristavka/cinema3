"use client";

import { useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Movie = () => {
  const router = useRouter();

  return (
    <div className="h-screen w-screen bg-black">
      <nav
        className="
            fixed
            w-full
            p-4
            z-10
            flex
            flex-row
            items-center
            gap-8
            bg-black/70
        "
      >
        <AiOutlineArrowLeft
          onClick={() => router.push("/")}
          className="text-white cursor-pointer"
          size={40}
        />
      </nav>
      <video
        autoPlay
        controls
        className="h-full w-full"
        src="/films/forsag1.mp4"
      ></video>
    </div>
  );
};

export default Movie;
