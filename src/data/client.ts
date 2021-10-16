import { QueryClient } from "react-query";

export const apiUrl = process.env.REACT_APP_API_URL ?? "";

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
