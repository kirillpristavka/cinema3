import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <div className="grid grid-cols-4 gap-2">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
