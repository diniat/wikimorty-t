import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import TypewriterComponent from "typewriter-effect";

const font = Montserrat({ weight: "700", subsets: ["latin"] });
const font2 = Montserrat({ weight: "500", subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center h-auto mt-6 mb-12 bg-gray-2 lg:h-screen lg:my-0">
      <div className="h-auto my-5 w-[95vw] bg-gray-1 p-5 rounded-2xl shadow-xl flex flex-col items-center lg:h-[78vh]">
        <div
          className={`${font2.className}flex flex-row justify-center items-center`}
        >
          <Link href="/">
            <Image
              src={"/images/logo.png"}
              alt="wikimorty-logo"
              width={100}
              height={60}
              className="h-auto w-auto"
            />
          </Link>
        </div>
        <div
          className={`flex font-medium flex-col justify-center md:flex-row md:mb-10`}
        >
          <div
            className={`${font.className}flex justify-center w-full text-4xl mt-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-900 to-teal-900 flex flex-col md:w-[40vw] md:mt-7 md:text-5xl md:h-full`}
          >
            <TypewriterComponent
              options={{
                strings: ["WikiMorty"],
                autoStart: true,
                loop: true,
              }}
            />
            <span
              className={`${font.className} mt-4 text-xl md:text-2xl md:mt-10`}
            >
              <TypewriterComponent
                options={{
                  strings: ["The Rick and Morty Wikipedia"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <p
              className={`${font2.className} text-base text-black w-[80%] mb-3 mt-5 md:w-[60%] lg:mb-7`}
            >
              Learn more about all your favorite characters
            </p>
            <Link href="#characters">
              <button
                className={`${font2.className} mb-5 self-center bg-gradient-to-l from-green-400 via-cyan-700 text-white shadow-md w-[45vw] rounded-lg  p-2 text-lg lg:mb-1 md:text-xl md:w-[25vw] md:p-3 md:self-start`}
              >
                Start Browsing
              </button>
            </Link>
          </div>
          <div className="px-3 pt-2 mb-5 pb-2 xl:mt-14">
            <Image
              src={"/images/hero.png"}
              alt="hero-img"
              width={450}
              height={290}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
