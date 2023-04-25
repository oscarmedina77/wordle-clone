import React, { useCallback, useEffect, useContext } from "react";
import { AppContext } from "../../App";
import { Key } from "./Key";
import s from "./Keyboard.styles";

export const Keyboard = () => {
  const { onDelete, onEnter, onSelectLetter } = useContext(AppContext);

  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboardPress = useCallback(
    (event: { key: string }) => {
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        row1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        row2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        row3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [onEnter, onDelete, onSelectLetter]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardPress);
    return () => {
      document.removeEventListener("keydown", handleKeyboardPress);
    };
  }, [handleKeyboardPress]);
  return (
    <s.keyboardContainer onKeyDown={handleKeyboardPress}>
      <s.keyboardRow>
        {row1.map((key) => {
          return (
            <s.keyboardLetter>
              <Key KeyVal={key} />
            </s.keyboardLetter>
          );
        })}
      </s.keyboardRow>
      <s.keyboardRow>
        {row2.map((key) => {
          return (
            <s.keyboardLetter>
              <Key KeyVal={key} />
            </s.keyboardLetter>
          );
        })}
      </s.keyboardRow>
      <s.keyboardRow>
        <button>
          <Key KeyVal="ENTER" />
        </button>
        {row3.map((key) => {
          return (
            <s.keyboardLetter>
              <Key KeyVal={key} />
            </s.keyboardLetter>
          );
        })}
        <button>
          <Key KeyVal="DEL" />
        </button>
      </s.keyboardRow>
    </s.keyboardContainer>
  );
};
