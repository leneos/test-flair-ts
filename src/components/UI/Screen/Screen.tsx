import React from "react";
import { useSelector } from "react-redux";
import { selectScreenImgs } from "../../../redux/appSlice";
import "./Screen.scss";
interface imgAttrs {
  src: string;
}
export const Screen: React.FC = () => {
  const gameImg = useSelector(selectScreenImgs);
  return (
    <div className="Screen">
      <img src={gameImg.screen} alt="" />
    </div>
  );
};
