import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsGameFinished,
  selectRounds,
  selectRoundScore,
  restartGame,
} from "../../redux/appSlice";
import { ScoreBox } from "../ScoreBox/ScoreBox";
import { Screen } from "../UI/Screen/Screen";
import "./Scoreboard.scss";
import { Button } from "../UI/Button/Button";
import { ScoreForm } from "../ScoreForm/ScoreForm";

export const Scoreboard: React.FC = () => {
  const rounds = useSelector(selectRounds);
  const isGameFinished = useSelector(selectIsGameFinished);
  const roundScore = useSelector(selectRoundScore);
  const dispatch = useDispatch();

  const renderTries = () => {
    return rounds.map((item: number, index: number) => {
      return (
        <div
          key={index + Math.floor(Math.random())}
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          {index + 1}
          <ScoreBox
            index={index}
            gameInfo={rounds[index]}
            roundScore={roundScore[index]}
          />
        </div>
      );
    });
  };

  return (
    <div className="row  pt-5">
      <div className="col-xs-12 col-xl-12">
        <Screen />
        <div className="ScoreBoard justify-content-center d-flex flex-wrap">
          {renderTries()}
        </div>
        {isGameFinished ? (
          <>
            <p>Всего: {roundScore[roundScore.length - 1]}</p>
            <Button
              className="btn btn-primary"
              onClick={() => dispatch(restartGame())}
              btnTitle="Restart Game"
            />
          </>
        ) : (
          <ScoreForm />
        )}
      </div>
    </div>
  );
};
