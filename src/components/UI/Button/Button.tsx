import React from "react";
import "./Button.scss";
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  btnTitle: string;
}
export const Button = ({ onClick, className, btnTitle }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {btnTitle}
    </button>
  );
};
