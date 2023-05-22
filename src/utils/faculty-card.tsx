import React, { ReactNode } from "react";

interface greenCardProps {
  children: ReactNode;
}

function FacultyCard({ children }: greenCardProps) {
  return (
    <div
      className={`flex flex-col w-[13rem] p-4  items-center  rounded-xl relative`}
    >
      {children}
    </div>
  );
}

export default FacultyCard;
