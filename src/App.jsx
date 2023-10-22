import { useState, useEffect, useCallback } from "react";
import Start from "./components/Start";
import Game from "./components/Game";
import End from "./components/End";
import { wordList } from "./assets/Words";

const stages = [
  { id: 0, stage: "start" },
  { id: 1, stage: "game" },
  { id: 2, stage: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].stage);
  const [words] = useState(wordList);
  const [choosenWord, setChoosenWord] = useState("");
  const [choosenCategory, setChoosenCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongeLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const randomSelection = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)];
  

    return { word, category };
  };

  const startGame = () => {
    const { word, category } = randomSelection();
    let wordLetters = word.toLowerCase().split('');

    setChoosenWord(word);
    setChoosenCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].stage);
    
  };

  const verifyLetter = () => {
    setGameStage(stages[2].stage);
  };

  const reeboot = () => {
    setGameStage(stages[0].stage);
  };
  return (
    <main>
      {gameStage === "start" && <Start StartGame={startGame} />}
      {gameStage === "game" &&
        <Game 
          verifyLetter={verifyLetter}
          choosenWord={choosenWord}
          choosenCategory={choosenCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
      />}
      {gameStage === "end" && <End reboot={reeboot} />}
    </main>
  );
  
}

export default App;
