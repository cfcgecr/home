import React from "react";
import titleUnderline from "../assets/titleLine.svg";
import sparkle from "../assets/sparkle.svg";
import Image from "next/image";
import Button from "../utils/hero-button.tsx";

import "../styles/herostyle.css";
function Hero() {
  const achievements = [
    {
      number: "12",
      task: "hackathons conducted",
    },
    {
      number: "3",
      task: "Expert talks",
    },
    {
      number: "1",
      task: "bootcamps",
    },
  ];

  return (
    <div className="flex flex-col justify-center mt-40 items-center">
      <h1 className="text-4xl relative">
        <span className="relative ">
          Welcome
          <Image
            src={titleUnderline}
            className="w-[100%] absolute "
            alt="underline"
          ></Image>{" "}
        </span>
        to the code for Community
        <Image
          src={sparkle}
          className="absolute right-[-2rem] top-[-4rem]"
          alt="underline"
        ></Image>
      </h1>
      <p className="w-[70%] mt-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        deserunt error amet ducimus atque harum animi quae sed ipsam tempora,
        aut saepe, unde odio accusamus adipisci exercitationem nesciunt non
        praesentium?
      </p>
      <h3 className="mt-3 text-2xl font-bold">
        Join Code For Community right now!!!
      </h3>
      <div className="newletter_subscribe flex border-2 mt-10  rounded-md ">
        <input
          type="text"
          id="newsletter"
          className="px-6 text-primary-gray w-[30rem] rounded-l-md border-0 "
          placeholder="Enter your email address"
        />
        <label
          className="cursor-pointer bg-primary-green hover:bg-secondary-green hover:text-white font-bold text-primary-gray p-1 px-2"
          htmlFor="newsletter"
        >
          Subscribe
        </label>
      </div>
      <div className="achievements flex justify-evenly w-[80%] mt-12">
        {achievements.map((achievement, index) => {
          return (
            <div
              key={index}
              className="italic achievement space-x-2 items-center"
            >
              <p className="number">{achievement.number}</p>
              <p className="task">{achievement.task}</p>
            </div>
          );
        })}
      </div>
      <hr className="bg-white w-[60%] mt-3" />
      <div className="flex space-x-8 mt-8 items-center">
        <span> Go to</span>
        <Button>Projects</Button>
        <Button>Achievements</Button>
        <Button>Events</Button>
      </div>
    </div>
  );
}

export default Hero;
