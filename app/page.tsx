import Billboard from "./Components/Billboard";
import MovieList from "./Components/MovieList";

export default function Home() {
  return (
    <>
      <Billboard />
      <div className="pb-40">
        <MovieList />
      </div>
    </>
  );
}
