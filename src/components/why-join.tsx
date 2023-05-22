import React from "react";
import Image from "next/image";
import Button from "@/utils/hero-button";
import image1 from "@/assets/why-join-images/Polygon 1.svg";
import image2 from "@/assets/why-join-images/Polygon 2.svg";
import image3 from "@/assets/why-join-images/Polygon 3.svg";
import image4 from "@/assets/why-join-images/Polygon 4.svg";
import image5 from "@/assets/why-join-images/Polygon 5.svg";
import image6 from "@/assets/why-join-images/Polygon 6.svg";
const reasons = [
  {
    reason: "Training",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgsrc: image1,
  },
  {
    reason: "Training",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgsrc: image2,
  },
  {
    reason: "Training",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgsrc: image3,
  },
  {
    reason: "Training",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgsrc: image4,
  },
  {
    reason: "Training",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgsrc: image5,
  },
  {
    reason: "Training",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgsrc: image6,
  },
];
function WhyJoin() {
  return (
    <div className="text-center flex justify-center flex-col items-center pb-4">
      <h2 className="text-2xl mb-10 font-bold">
        This is why you should join Code For Community!!!
      </h2>
      <div className="whyjoin-reasons grid grid-cols-2 w-[80%] gap-8 ">
        {reasons.map((reason, index) => {
          if (index % 2 == 0) {
            return (
              <div key={index} className="flex justify-center text-left gap-10">
                <Image src={reason.imgsrc} alt="reason image"></Image>
                <div className="w-[60%]">
                  <h4 className="">{reason.reason}</h4>
                  <p>{reason.desc}</p>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="flex justify-center text-right gap-10"
              >
                <div className="w-[60%]">
                  <h4 className="">{reason.reason}</h4>
                  <p>{reason.desc}</p>
                </div>
                <Image src={reason.imgsrc} alt="reason image"></Image>
              </div>
            );
          }
        })}
      </div>
      <div className="my-6">
        <Button>Show more</Button>
      </div>
      <hr className="bg-white w-[60%] mt-4" />
    </div>
  );
}

export default WhyJoin;
