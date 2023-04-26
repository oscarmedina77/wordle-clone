import React, { useEffect, useState } from "react";
import { Keyboard } from "./components/Keyboard/Keyboard";
import { Board } from "./components/Board/Board";
import s from "./App.styles";
import { boardDefault, wordList } from "./Words";
import { createContext } from "react";
import { GameOver } from "./components/GameOver/GameOver";

interface CurrentAttempt {
  attempt: number;
  letterPosition: number;
}

interface GameOver {
  gameOver: boolean;
  wordGuessed: boolean;
}

interface AppContextType {
  chosenWord: string;
  board: string[][];
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
  currentAttempt: CurrentAttempt;
  setCurrentAttempt: React.Dispatch<React.SetStateAction<CurrentAttempt>>;
  onSelectLetter: (keyVal: string) => void;
  onDelete: () => void;
  onEnter: () => void;
  disabledLetters: string[];
  setDisabledLetters: React.Dispatch<React.SetStateAction<string[]>>;
  gameOver: GameOver;
  setGameOver: React.Dispatch<React.SetStateAction<GameOver>>;
}

export const AppContext = createContext<AppContextType>({
  board: [[]],
  setBoard: () => {},
  currentAttempt: {
    attempt: 0,
    letterPosition: 0,
  },
  setCurrentAttempt: () => {},
  onSelectLetter: (keyVal: string) => {},
  onDelete: () => {},
  onEnter: () => {},
  chosenWord: "",
  disabledLetters: [],
  setDisabledLetters: () => {},
  gameOver: {
    gameOver: false,
    wordGuessed: false,
  },
  setGameOver: () => {},
});

const App = () => {
  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState<CurrentAttempt>({
    attempt: 0,
    letterPosition: 0,
  });
  const [disabledLetters, setDisabledLetters] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState<GameOver>({
    gameOver: false,
    wordGuessed: false,
  });
  // const [wordSet, setWordSet] = useState(new Set());

  const alphabet = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];

  const chosenWord = "house";

  // useEffect(() => {
  //   generateWordSet().then((wordSet) => {
  //     // console.log(wordSet);
  //     return setWordSet(wordSet);
  //   });
  // }, []);

  const onSelectLetter = (KeyVal: string) => {
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = KeyVal;
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition + 1,
    });
  };

  const onDelete = () => {
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition - 1,
    });
  };

  const onEnter = () => {
    if (currentAttempt.letterPosition !== 5) return;

    let currentWord = "";
    for (let i = 0; i < 5; i++) {
      currentWord += board[currentAttempt.attempt][i].toLowerCase();
    }

    if (wordList.includes(currentWord)) {
      setCurrentAttempt({
        attempt: currentAttempt.attempt + 1,
        letterPosition: 0,
      });
    } else {
      alert("Word not found");
    }

    if (chosenWord === currentWord) {
      console.log(chosenWord);
      console.log(currentWord);
      console.log("Game Won");
      setGameOver({ gameOver: true, wordGuessed: true });
      return;
    }

    if (currentAttempt.attempt === 5) {
      setGameOver({ gameOver: true, wordGuessed: false });
    }
  };

  return (
    <s.App>
      <nav>
        <h1>Wrodle</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currentAttempt,
          setCurrentAttempt,
          onDelete,
          onSelectLetter,
          onEnter,
          chosenWord,
          disabledLetters,
          setDisabledLetters,
          gameOver,
          setGameOver,
        }}
      >
        <Board />
        {gameOver.gameOver ? <GameOver /> : <Keyboard />}
      </AppContext.Provider>
    </s.App>
  );
};

export default App;
