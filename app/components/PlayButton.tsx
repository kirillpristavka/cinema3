import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton = ({
  movieId
}: PlayButtonProps) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="
        bg-white
        rounded-md
        py-2
        px-4
        w-auto
        text-xs
        lg:text-lg
        font-semibold
        flex
        flex-row
        items-center
        hover:bg-neutral-300
        transition
        cursor-pointer
      "
    >
      <BsFillPlayFill className="mr-1" />
      Play
    </button>
  );
};

export default PlayButton;
