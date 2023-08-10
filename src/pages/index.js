import Hero from "@/components/Hero";
import FilterableCharactersTable from "@/components/FilterableCharactersTable";
import Head from "next/head";
import axios from "axios";
import { toast } from "react-hot-toast";
import EditorsPicks from "@/components/EditorsPicks";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Wikimorty</title>
        <meta
          name="description"
          content="Everything you need to know about Rick and Morty."
        />
      </Head>
      <main className="w-full min-h-screen bg-gray-2 flex flex-col justify-center items-center overflow-y-auto">
        <Hero />
        <EditorsPicks characters={data} />
        <FilterableCharactersTable characters={data} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  try {
    const result = await axios.get(
      "https://rickandmortyapi.com/api/character/"
    );
    const data = result.data.results;
    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    toast.error("Something went wrong.", error);
  }
}
