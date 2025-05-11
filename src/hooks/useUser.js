import { useQuery } from "@tanstack/react-query";
import { user } from "../lib/auth/user";

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: user,
    staleTime: 1000 * 60 * 5, // optional: cache for 5 minutes
    retry: false,
  });
};
