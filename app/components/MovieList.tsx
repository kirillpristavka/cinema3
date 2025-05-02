import { isEmpty } from "lodash";
import MovieCard from "@/app/components/MovieCard";

interface MovieListProps {
  data: Record<string, any>[];
  title: String;
}

const MovieList = ({
  data,
  title
}: MovieListProps) => {
  if(isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 md:px-8 lg:px-13 mt-4 space-y-8">
      <div>
        <p className="text-white text-3xl lg:text-5xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {data.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
