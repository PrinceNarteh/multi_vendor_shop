import { useMutation } from "@tanstack/react-query";
import useFetch from "./useFetch";

const useMutate = (mutationKey: string[]) => {
  const fetch = useFetch();
  const { mutate, isLoading } = useMutation({
    mutationKey: [...mutationKey],
    mutationFn: fetch,
  });
  return {
    mutate,
    isLoading,
  };
};

export default useMutate;
