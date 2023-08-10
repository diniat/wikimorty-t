import React from "react";
import { Montserrat } from "next/font/google";

const font2 = Montserrat({ weight: "400", subsets: ["latin"] });

const CharacterRow = ({ character }) => {
  return (
    <div
      className={`${font2.className} rounded-lg shadow-xs py-2 md:shadow-lg md:py-5 md:mb-2 hover:bg-gg`}
    >
      <tr className="grid grid-cols-4 gap-x-3 md:text-lg sm:gap-x-4 sm:text-xs">
        <td className="">{character.id}</td>
        <td className="pr-1">{character.name}</td>
        <td className="">{character.status}</td>
        <td>{character.species}</td>
      </tr>
    </div>
  );
};

export default CharacterRow;
