import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayButton from "./PlayButton";

const Billboard = () => {
  return (
    <div className="relative h-[56.25vw]">
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
        src="/trailers/forsag1.mp4"
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p
          className="
            text-white
            text-xl
            md:text-5xl
            h-full
            w-[50%]
            lg:text-6xl
            font-bold
            drop-shadow-xl
        "
        >
          Форсаж
        </p>
        <p
          className="
            text-white
            text-[8px]
            md:text-lg
            mt-3
            md:mt-8
            w-[90%]
            md:w-[80%]
            lg:w-[50%]
            drop-shadow-xl
        "
        >
          Его зовут Брайан, и он — фанат турбин и нитроускорителей. Он пытается
          попасть в автобанду легендарного Доминика Торетто, чемпиона опасных и
          незаконных уличных гонок. Брайан также полицейский, и его задание —
          втереться в доверие к Торетто, подозреваемому в причастности к дерзким
          грабежам грузовиков, совершаемым прямо на ходу.
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton />
          {/* <button
            className="
                bg-white/50
                text-white
                rounded-md
                py-1
                md:py-2
                px-2
                md:px-4
                w-auto
                text-xs
                lg:text-lg
                font-semibold
                flex
                flex-row
                items-center
                hover:bg-white/20
                transition
            "
          >
            <AiOutlineInfoCircle className="mr-1" />
            More Info
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Billboard;
