import { useQuery } from "@tanstack/react-query";

const useFetch = (queryKey, url) => {
  async function fetchData() {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch", response.status);
    }
    return response.json();
  }

  const { data, isPending, isError, error } = useQuery({
    queryKey: queryKey,
    queryFn: fetchData,
    staleTime: 5 * 1000,
  });

  return { data, isPending, isError, error };
};

export default useFetch;
