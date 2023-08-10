import "@/styles/globals.css";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`font-mont w-full min-h-screen h-full`}>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
}
