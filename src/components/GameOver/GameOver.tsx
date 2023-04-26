import { useContext } from "react";
import { AppContext } from "../../App";
import s from "./GameOver.styles";

export const GameOver = () => {
  const { gameOver, chosenWord, currentAttempt } = useContext(AppContext);
  return (
    <s.GameOverContainer>
      <h3>{gameOver.wordGuessed ? "You guessed the word!" : "Game Over"}</h3>
      <h1>Correct Word: {chosenWord}</h1>
      {gameOver.wordGuessed && (
        <h3>You guessed it in {currentAttempt.attempt} attempts</h3>
      )}
    </s.GameOverContainer>
  );
};
