import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

const Header = () => {
  const [logo, setLogo] = useState("hidden");

  useEffect(() => {
    const showLogo = () => {
      if (window.scrollY >= 90) {
        setLogo("block");
      } else {
        setLogo("hidden");
      }
    };
    window.addEventListener("scroll", showLogo);
  }, []);

  return (
    <div
      className={`${font.className} bg-gray-1 fixed left-0 top-0 w-full z-10 ease-in duration-300`}
    >
      <div
        className={`${logo} mt-2 max-w-[1240px] m-auto flex flex-row justify-between items-center p-4 text-white pb-8`}
      >
        <Link href="/">
          <p className="text-base text-black-ish hover:text-rm-green md:text-xl">
            Home
          </p>
        </Link>
        <Link href="/">
          <Image
            src={"/images/logo.png"}
            alt="wikimorty-logo"
            width={125}
            height={60}
            className="h-auto w-auto"
          />
        </Link>
        <Link href="#characters">
          <p className="text-base text-black-ish hover:text-rm-green md:text-xl">
            Characters
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
