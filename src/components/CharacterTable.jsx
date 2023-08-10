import React from "react";
import CharacterRow from "./CharacterRow";
import { Montserrat } from "next/font/google";

const font2 = Montserrat({ weight: "500", subsets: ["latin"] });

const Characterdiv = ({ characters }) => {
  return (
    <div
      className={`${font2.className}text-sm mt-2 mb-2 pb-1 w-full md:text-lg`}
    >
      <div className="">
        <ul className={`${font2.className} grid grid-cols-4 gap-x-1`}>
          <li className="">ID</li>
          <li className="">Name</li>
          <li className="">Status</li>
          <li className="">Species</li>
        </ul>
      </div>
      <div className="">
        {characters.map((character) => (
          <CharacterRow key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default Characterdiv;
