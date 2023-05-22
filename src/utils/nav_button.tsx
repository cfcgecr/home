import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <button className="bg-primary-green px-9 rounded-md py-2 text-primary-gray hover:bg-secondary-green  hover:text-white">
      {children}
    </button>
  );
}

export default Button;
