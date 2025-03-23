const MovieCard = () => {
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <img
        className="
            cursor-pointer
            object-cover
            transition
            duration
            shadow-xl
            group-hover:opacity-50
            delay-300
            w-full
            h-[12vw]
        "
        src="/images/forsag1.jpg"
        alt="Thumbnail"
      />
    </div>
  );
};

export default MovieCard;
