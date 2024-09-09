import "@/styles/globals.css";
import type { AppProps } from "next/app";
import PostProvider from "@/contexts/posts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PostProvider>
      <Component {...pageProps} />
    </PostProvider>
  );
}
