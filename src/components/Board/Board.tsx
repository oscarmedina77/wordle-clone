import React, { useState } from "react";
import s from "./Board.styles";
import { boardDefault } from "../../Words";
import { Letter } from "./Letter/Letter";

export const Board = () => {
  const [board, setBoard] = useState(boardDefault);
  return (
    <s.boardContainer className="board">
      <s.guessRow className="row">
        <Letter letterPosition={0} attemptValue={0} />
        <Letter letterPosition={1} attemptValue={0} />
        <Letter letterPosition={2} attemptValue={0} />
        <Letter letterPosition={3} attemptValue={0} />
        <Letter letterPosition={4} attemptValue={0} />
      </s.guessRow>
      <s.guessRow>
        <Letter letterPosition={0} attemptValue={1} />
        <Letter letterPosition={1} attemptValue={1} />
        <Letter letterPosition={2} attemptValue={1} />
        <Letter letterPosition={3} attemptValue={1} />
        <Letter letterPosition={4} attemptValue={1} />
      </s.guessRow>
      <s.guessRow>
        <Letter letterPosition={0} attemptValue={2} />
        <Letter letterPosition={1} attemptValue={2} />
        <Letter letterPosition={2} attemptValue={2} />
        <Letter letterPosition={3} attemptValue={2} />
        <Letter letterPosition={4} attemptValue={2} />
      </s.guessRow>
      <s.guessRow>
        <Letter letterPosition={0} attemptValue={3} />
        <Letter letterPosition={1} attemptValue={3} />
        <Letter letterPosition={2} attemptValue={3} />
        <Letter letterPosition={3} attemptValue={3} />
        <Letter letterPosition={4} attemptValue={3} />
      </s.guessRow>
      <s.guessRow>
        <Letter letterPosition={0} attemptValue={4} />
        <Letter letterPosition={1} attemptValue={4} />
        <Letter letterPosition={2} attemptValue={4} />
        <Letter letterPosition={3} attemptValue={4} />
        <Letter letterPosition={4} attemptValue={4} />
      </s.guessRow>
      <s.guessRow>
        <Letter letterPosition={0} attemptValue={5} />
        <Letter letterPosition={1} attemptValue={5} />
        <Letter letterPosition={2} attemptValue={5} />
        <Letter letterPosition={3} attemptValue={5} />
        <Letter letterPosition={4} attemptValue={5} />
      </s.guessRow>
    </s.boardContainer>
  );
};
