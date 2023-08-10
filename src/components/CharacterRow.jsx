import React from "react";
import { Montserrat } from "next/font/google";

const font2 = Montserrat({ weight: "400", subsets: ["latin"] });

const CharacterRow = ({ character }) => {
  return (
    <div
      className={`${font2.className} rounded-lg shadow-xs py-2 md:shadow-lg md:py-5 md:mb-2 hover:bg-gradient-to-r from-emerald-100 via-slate-200 to-blue-200`}
    >
      <ul className="grid grid-cols-4 gap-x-3 md:text-lg sm:gap-x-4 sm:text-xs">
        <li className="">{character.id}</li>
        <li className="pr-1">{character.name}</li>
        <li className="">{character.status}</li>
        <li>{character.species}</li>
      </ul>
    </div>
  );
};

export default CharacterRow;
