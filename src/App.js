import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [positionX, setPositionX] = useState("");
  const [positionY, setPositionY] = useState("");
  const [timeLeft, setTimeLeft] = useState(10);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);

  const handleClick = () => {
    setPositionX(Math.floor(Math.random() * 200));
    setPositionY(Math.floor(Math.random() * 200));
    console.log(positionX + "e" + positionY);
    setScore(score + 10);
  };

  useEffect(() => {
    if (timeLeft === 0) {
      setDisabled(true);
    } else {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  return (
    <div className="App">
      <h1>Pontuação: {score}</h1>
      <h1>Tempo: {timeLeft}</h1>
      <div id="game">
        <div
          id="cu"
          style={{
            position: "absolute",
            top: `${positionY}px`,
            left: `${positionX}px`,
          }}
          onClick={handleClick}
        >
          <button disabled={disabled}>O</button>
        </div>
      </div>
    </div>
  );
}

export default App;
