import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import {
  REFETCH_ON_RECONNECT,
  REFETCH_ON_WINDOW_FOCUS,
  STALE_TIME,
} from "../src/constants/queryClient";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: REFETCH_ON_WINDOW_FOCUS,
      refetchOnReconnect: REFETCH_ON_RECONNECT,
      staleTime: STALE_TIME,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </QueryClientProvider>
  );
}
