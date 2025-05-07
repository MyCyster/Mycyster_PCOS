import { useQuery } from "@tanstack/react-query";
import { profile } from "../lib/auth/profile";

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: profile,
    staleTime: 1000 * 60 * 5, // optional: cache for 5 minutes
    retry: false,
  });
};
