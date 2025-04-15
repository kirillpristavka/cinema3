"use client";

import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

const PlayButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/films/forsag1.mp4")}
      className="
        bg-white
        rounded-md
        py-1 md:py-2
        px-2 md:px-4
        w-auto
        text-xs lg:text-lg
        font-semibold
        flex
        flex-row
        items-center
        hover:bg-neutral-300
        transition
        cursor-pointer"
    >
      <BsFillPlayFill size={25} className="mr-1" />
      Play
    </button>
  );
};

export default PlayButton;
