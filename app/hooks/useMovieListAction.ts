import useSWR from "swr";
import fetcher from "@/app/libs/fetcher";

const useMovieListAction = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/action', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return {
        data,
        error,
        isLoading
    }
};

export default useMovieListAction;