import GreenCard from "@/utils/green-card";
import React from "react";
import Image from "next/image";
const cards = [
  {
    title: "Lorem ipsum dolor sit amet",
    position: "Lorem ipsum dolor sit amet .",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    position: "Lorem ipsum dolor sit amet .",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    position: "Lorem ipsum dolor sit amet .",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    position: "Lorem ipsum dolor sit amet .",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    position: "Lorem ipsum dolor sit amet .",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    position: "Lorem ipsum dolor sit amet .",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    position: "Lorem ipsum dolor sit amet .",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    position: "Lorem ipsum dolor sit amet .",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/200/300",
  },
];

function SectionGreenCards() {
  return (
    <div className="grid grid-cols-4 gap-8 mt-10 max-w-[1280px]">
      {cards.map((card, index) => {
        return (
          <GreenCard
            key={index}
            style={{
              width: "200px",
              height: `100%`,
              background:
                "linear-gradient(180deg, var(--primary-green) 0%, rgba(255, 255, 255, 0.88) 54.28%)",
            }}
          >
            <Image
              src={card.image}
              alt="new image"
              width={100}
              height={100}
              className="rounded-full aspect-square	"
            ></Image>
            <h3 className="text-lg mt-4">{card.title}</h3>
            <p className="text-md mt-4">{card.position}</p>
            <p className="text-sm mt-4">{card.description}</p>
          </GreenCard>
        );
      })}
    </div>
  );
}

export default SectionGreenCards;
