import React from "react";
import CharacterCard from "./CharacterCard";
import { Montserrat } from "next/font/google";

const font = Montserrat({ weight: "500", subsets: ["latin"] });

const EditorsPicks = ({ characters }) => {
  const filteredCharacters = characters.filter(
    (character) =>
      character.id === 4 ||
      character.id === 6 ||
      character.id === 18 ||
      character.id === 11
  );
  return (
    <>
      <h1 className={`${font.className} text-2xl mb-2 md:mb-4 md:text-4xl`}>
        The Editor&apos;s Picks
      </h1>
      <div
        id="editorsPicks"
        className="w-full h-auto bg-gray-2 mx-2 my-3 px-1 flex justify-center items-center flex-col md:flex-wrap md:flex-row"
      >
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </>
  );
};

export default EditorsPicks;
