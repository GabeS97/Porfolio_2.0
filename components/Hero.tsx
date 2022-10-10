import React from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import profile from "../public/profile.jpg";
import prof_pic from "../public/prof_pic.jpg";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Welcome! My name is Gabriel Sitorus...",
      "GuyWhoLovesToCode.tsx",
      "return progress > perfect",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={prof_pic}
        height={150}
        width={150}
        className="rounded-full relative mx-auto object-cover"
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href='#about'>
            <button className="heroButton">About</button>
          </Link>

          <Link href='#experience'>
            <button className="heroButton">Experience</button>
          </Link>

          <Link href='#skills'>
            <button className="heroButton">Skills</button>
          </Link>

          <Link href='#projects'>
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
