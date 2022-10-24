import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      //   viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] object-cover"
      ></motion.img>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="decoration-[#F7AB0A]/80 underline">little</span>{" "}
          background
        </h4>
        <p className="text-lg">
          Hey! It's so good to have you, my name is Gabriel Sitorus. I am a
          business grad turned software engineer. Upon my graduation from
          Chapman University, the world was at the peak of COVID, which had made
          applying to jobs a little bit more difficult, especially because I was
          an international student living in the Unites States at the time. So
          instead of putting all my efforts into pursuing a path in business, I
          began to explore other paths and opportunities.
          <br />
          <br />
          Coding stuck out to me because not only that I figured that with this
          new skill I would able to code open new doors., but I understood that
          although I can make a great impact through business, for me to create
          the vehicle that will push for a better tomorrow, I NEEDED to be in
          tech.
          <br />
          <br />
          What you are looking at now; this portfolio, as well a few of the
          projects linked below are representations of what I have learnt so far
          as a software engineer, and I would love, if given the opportunity, to
          continue this growth together.
          <br />
          <br />
          Cheers 👋🏽
        </p>
      </div>
    </motion.div>
  );
}

export default About;
