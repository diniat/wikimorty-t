import Hero from "@/components/Hero";
import FilterableCharactersTable from "@/components/FilterableCharactersTable";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gray-2 flex flex-col justify-center items-center overflow-y-auto">
      <Hero />
      <FilterableCharactersTable />
    </main>
  );
}
