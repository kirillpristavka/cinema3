import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import useInfoModal from "@/app/hooks/useInfoModal";
import { useCallback } from "react";
import useBillboard from "@/app/hooks/useBillboard";
import PlayButton from "./PlayButton";

const Billboard = () => {
  const { data } = useBillboard();

  const { openModal } = useInfoModal();

  const handleOpenModal = useCallback(() => {
      openModal(data?.id);
  }, [openModal, data?.id]);

  return (
    <div className="relative h-[56.25vw]">
      <div className="">
        <video
          className="
              w-full
              h-[56.25vw]              
              object-cover
              brightness-[60%]
          "
          autoPlay
          muted
          loop
          src={data?.trailerUrl}
        ></video>
        <div className="absolute top-[45%] sm:top-[55%] md:top-[55%] lg:top-[45%] xl:top-[50%] ml-4 md:ml-8 lg:ml-13.5">
          <p
            className="
              text-white
              text-xl
              sm:text-3xl
              md:text-4xl
              lg:text-6xl
              h-full
              w-[50%]
              font-bold
              drop-shadow-xl
          "
          >
            {data?.title}
          </p>
          <p
            className="
              text-white
              text-[10px]
              xs:text-xs
              sm:text-sm
              md:text-md
              lg:text-lg
              mt-3
              lg:mt-8
              w-[90%]
              md:w-[80%]
              lg:w-[60%]
              drop-shadow-xl
              line-clamp-1
              xs:line-clamp-2
              sm:line-clamp-3
              md:line-clamp-4
              lg:line-clamp-5
              xl:line-clamp-6
          "
          >
            {data?.description}
          </p>
          <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
            <PlayButton movieId={data?.id} />
            <button
              onClick={handleOpenModal}
              className="
                  bg-white/50
                  text-white
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
                  hover:bg-white/20
                  transition
                  cursor-pointer
              "
            >
              <AiOutlineInfoCircle className="mr-1" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
