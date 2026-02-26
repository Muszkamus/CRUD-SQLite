import React, { ReactNode } from "react";
import "../styles/homepage.css";

type ButtonProps = {
  children: ReactNode;
  submitRequest: () => void;
};

const Button = ({ children, submitRequest }: ButtonProps) => {
  return (
    <button className="button" onClick={submitRequest}>
      {children}
    </button>
  );
};

export default Button;
