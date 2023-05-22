import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <button className="px-10 rounded-xl py-1 bg-primary-gray text-white hover:bg-secondary-gray">
      {children}
    </button>
  );
}

export default Button;
