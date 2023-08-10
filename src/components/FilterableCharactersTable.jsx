import React, { useState } from "react";
import SpeciesSelection from "./SpeciesSelection";
import CharacterTable from "./CharacterTable";

const FilterableCharactersTable = ({ characters }) => {
  const [selectedSpecies, setSelectedSpecies] = useState(undefined);

  const selectSpecies = (species) => {
    setSelectedSpecies(species);
  };

  const filteredCharacters = selectedSpecies
    ? characters.filter((character) => character.species === selectedSpecies)
    : characters;

  return (
    <div
      id="characters"
      className="h-auto w-auto mx-2 px-1 mb-6 mt-6 bg-gray-1 py-2 rounded-2xl shadow-xl flex flex-col items-center md:px-16 md:mb-10 md:mt10 md:mx-4"
    >
      <SpeciesSelection
        selectedSpecies={selectedSpecies}
        selectSpecies={selectSpecies}
      />
      <CharacterTable characters={filteredCharacters} />
    </div>
  );
};

export default FilterableCharactersTable;
