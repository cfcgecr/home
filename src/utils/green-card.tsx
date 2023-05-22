import React, { ReactNode } from "react";

interface greenCardProps {
  children: ReactNode;
  style: React.CSSProperties;
}

function GreenCard({ children, style }: greenCardProps) {
  return (
    <div
      className={`flex flex-col text-gray-800  items-center p-8 rounded-xl relative`}
      style={style}
    >
      {children}
    </div>
  );
}

export default GreenCard;
