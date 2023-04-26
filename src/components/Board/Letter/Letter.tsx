import React, { useEffect } from "react";
import s from "./Letter.styles";
import { useContext } from "react";
import { AppContext } from "../../../App";

interface LetterProps {
  letterPosition: number;
  attemptValue: number;
}

export const Letter = (props: LetterProps) => {
  const { board, chosenWord, currentAttempt, setDisabledLetters } =
    useContext(AppContext);
  const letter = board[props.attemptValue][props.letterPosition];
  const correct = chosenWord.toUpperCase()[props.letterPosition] === letter;

  const almost =
    !correct && letter !== "" && chosenWord.toUpperCase().includes(letter);

  const letterState =
    currentAttempt.attempt > props.attemptValue &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currentAttempt.attempt]);

  return <s.letterGuess id={`${letterState}`}>{letter}</s.letterGuess>;
};
