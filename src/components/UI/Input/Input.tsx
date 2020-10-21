import React, { InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number | undefined;
  className: string;
  type: string;
  placeholder: string;
  value: string | number;
}
export const Input: React.FC<InputProps> = ({
  onChange,
  min,
  max,
  className,
  type,
  placeholder,
  value,
}) => {
  return (
    <input
      value={value}
      type={type}
      className={className}
      onChange={onChange}
      min={min}
      max={max}
      placeholder={placeholder}
    />
  );
};
