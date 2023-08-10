import React from "react";
import CharacterRow from "./CharacterRow";
import { Montserrat } from "next/font/google";

const font2 = Montserrat({ weight: "500", subsets: ["latin"] });

const CharacterTable = ({ characters }) => {
  return (
    <table
      className={`${font2.className}text-sm mt-2 mb-2 pb-1 w-full md:text-lg`}
    >
      <thead className="">
        <tr className={`${font2.className} grid grid-cols-4 gap-x-1`}>
          <th className="">ID</th>
          <th className="">Name</th>
          <th className="">Status</th>
          <th className="">Species</th>
        </tr>
      </thead>
      <tbody className="border-solid  border-black">
        {characters.map((character) => (
          <CharacterRow key={character.id} character={character} />
        ))}
      </tbody>
    </table>
  );
};

export default CharacterTable;
