import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const font = Montserrat({ weight: "400", subsets: ["latin"] });

const CharacterCard = ({ character }) => {
  return (
    <div
      className={`${font.className} hover:bg-gradient-to-r from-emerald-100 via-slate-200 to-blue-200 w-[90vw] flex p-6 rounded-[20px] mb-6 mx-3 bg-gray-1 md:w-[40vw] md:mx-6`}
    >
      <div
        className={`w-[120px] h-[120px] rounded-lg flex justify-center items-center`}
      >
        <Image
          src={character.image}
          width={120}
          height={120}
          alt="character-pic"
          className="rounded-lg"
        />
      </div>
      <div className="flex-1 ml-3">
        <div className="flex flex-col ml-3">
          <h4 className="font-semibold text-[18px] leading-[23.4px] mb-1">
            {character.name}
          </h4>
          <h6 className="font-normal text-[11px]">
            {character.status} - {character.species}
          </h6>
          <p className="font-normal text-[16px] leading-[24px] mt-1 flex flex-col md:mt-2">
            Location: {character.location.name}
            <span className="font-normal mt-1 text-[16px] leading-[24px] md:mt-2">
              Origin: {character.origin.name}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
