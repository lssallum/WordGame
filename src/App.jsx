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
  const [wrongLetters, setwrongLetters] = useState([]);
  const guessesQt = 3;
  const [guesses, setGuesses] = useState(guessesQt);
  const [score, setScore] = useState(0);

  const randomSelection = useCallback(() => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }, [words]);

  const clearAllStates = () => {
    setChoosenWord("");
    setChoosenCategory("");
    setLetters([]);
    setGuessedLetters([]);
    setwrongLetters([]);
  };

  const startGame = useCallback(() => {
    clearAllStates();
    const { word, category } = randomSelection();
    let wordLetters = word.toLowerCase().split("");

    setChoosenWord(word);
    setChoosenCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].stage);
  }, [randomSelection]);

  const verifyLetter = (e) => {
    const letter = e.toLowerCase();

    if (guessedLetters.includes(letter) || wrongLetters.includes(letter)) {
      return;
    }

    if (letters.includes(letter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ]);
    } else {
      setwrongLetters((actualWrongLetters) => [...actualWrongLetters, letter]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  useEffect(() => {
    if (guesses <= 0) {
      setGameStage(stages[2].stage);
    }
  }, [guesses]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];
      if(guessedLetters.length === uniqueLetters.length){
        setScore((actualScore) => actualScore += 100 )
        startGame();
      }
  }, [guessedLetters, letters, startGame]);

  const reboot = () => {
    setGuesses(guessesQt);
    setScore(0);

    setGameStage(stages[0].stage);
  };
  return (
    <main>
      {gameStage === "start" && <Start StartGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          choosenWord={choosenWord}
          choosenCategory={choosenCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <End reboot={reboot} score={score} />}
    </main>
  );
}

export default App;
