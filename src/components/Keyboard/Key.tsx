import React, { useContext } from "react";
import { AppContext } from "../../App";

interface KeyProps {
  KeyVal: string;
}

export const Key = (props: KeyProps) => {
  const { currentAttempt, onDelete, onEnter, onSelectLetter } =
    useContext(AppContext);

  const selectLetter = () => {
    if (props.KeyVal === "ENTER") {
      if (currentAttempt.letterPosition !== 5) return;
      onEnter();
    } else if (props.KeyVal === "DEL") {
      if (currentAttempt.letterPosition === 0) return;
      onDelete();
    } else {
      if (currentAttempt.letterPosition > 4) return;
      onSelectLetter(props.KeyVal);
    }
  };
  return <div onClick={selectLetter}>{props.KeyVal}</div>;
};
