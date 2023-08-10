import React from "react";
import { Montserrat } from "next/font/google";

const font2 = Montserrat({ weight: "500", subsets: ["latin"] });

const SpeciesSelection = ({ selectedSpecies, selectSpecies }) => {
  return (
    <div
      className={`${font2.className} flex flex-row justify-between mb-2 md:mb-4 mt-1`}
    >
      <button
        onClick={() => selectSpecies(undefined)}
        className={`px-4 py-2 mx-2 ${
          selectedSpecies === undefined
            ? "bg-gradient-to-r from-green-400 via-cyan-600 to-teal-500 text-black-ish rounded-md"
            : "bg-gray-300 text-black-ish rounded-md"
        }`}
      >
        All Species
      </button>
      <button
        onClick={() => selectSpecies("Human")}
        className={`px-4 py-2 mx-2 ${
          selectedSpecies === "Human"
            ? "bg-gradient-to-r from-green-400 via-cyan-600 to-teal-500 text-black-ish rounded-md"
            : "bg-gray-300 text-black-ish rounded-md"
        }`}
      >
        Human
      </button>
      <button
        onClick={() => selectSpecies("Alien")}
        className={`px-4 py-2 mx-2 ${
          selectedSpecies === "Alien"
            ? "bg-gradient-to-r from-green-400 via-cyan-600 to-teal-500 text-black-ish rounded-md"
            : "bg-gray-300 text-black-ish rounded-md"
        }`}
      >
        Alien
      </button>
    </div>
  );
};

export default SpeciesSelection;
