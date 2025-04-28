"use client";

import Billboard from "@/app/components/Billboard";
import InfoModal from "@/app/components/InfoModal";
import MovieList from "@/app/components/MovieList";
import Navbar from "@/app/components/Navbar";
import useInfoModal from "@/app/hooks/useInfoModal";
import useMovieListAction from "@/app/hooks/useMovieListAction";

export default function Home() {
  const { data: action = [] } = useMovieListAction();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Боевики" data={action} />
      </div>
    </>
  );
}
