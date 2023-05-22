import FacultyCard from "@/utils/faculty-card";
import Image from "next/image";

const faculties = [
  {
    name: "R H Talwekar",
    designation: "HoD CSE & ET&T",
    imgSrc: "https://picsum.photos/200/300",
    msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    name: "R H Talwekar",
    designation: "HoD CSE & ET&T",
    imgSrc: "https://picsum.photos/200/300",
    msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    name: "R H Talwekar",
    designation: "HoD CSE & ET&T",
    imgSrc: "https://picsum.photos/200/300",
    msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    name: "R H Talwekar",
    designation: "HoD CSE & ET&T",
    imgSrc: "https://picsum.photos/200/300",
    msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    name: "R H Talwekar",
    designation: "HoD CSE & ET&T",
    imgSrc: "https://picsum.photos/200/300",
    msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    name: "R H Talwekar",
    designation: "HoD CSE & ET&T",
    imgSrc: "https://picsum.photos/200/300",
    msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    name: "R H Talwekar",
    designation: "HoD CSE & ET&T",
    imgSrc: "https://picsum.photos/200/300",
    msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing.",
  },
];
const Faculties = () => {
  return (
    <div>
      {faculties.map((faculty, index) => {
        return (
          <div key={index} className="">
            <FacultyCard>
              <Image alt="faculty name" src={faculty.imgSrc}></Image>
              <h5>{faculty.name}</h5>
              <p>{faculty.designation}</p>
              <p>{faculty.msg}</p>
            </FacultyCard>
          </div>
        );
      })}
    </div>
  );
};

export default Faculties;
