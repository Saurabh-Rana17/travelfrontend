import { useQuery } from "@tanstack/react-query";

const useFetch = (url, staleTimeValue = 20 * 1000) => {
  async function fetchData() {
    const response = await fetch(`https://travel-rv5s.onrender.com${url}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${response.status}  ${response.statusText}`
      );
    }
    return response.json();
  }

  const { data, isPending, isError, error } = useQuery({
    queryKey: [url],
    queryFn: fetchData,
    staleTime: staleTimeValue,
    refetchOnWindowFocus: false,
  });

  return { data, isPending, isError, error };
};

export default useFetch;
