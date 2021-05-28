import React, {useState} from "react";
import Mole from "./Mole";
import Moles from "./Moles";
import Score from "./Score";
import Timer from "./Time";

const TIME_LIMIT = 30000
const MOLE_SCORE = 100
const NUMBER_OF_MOLES = 5

const Game = () => {
  const [playing, setPlaying] = useState(false)
  const [finished, setFinished] = useState(false)
  const [score, setScore] = useState(0)
  
  const onWhack = points => setScore(score + points)
    
  const endGame = () => {
    setPlaying(false)
    setFinished(true)
  }

  const startGame = () => {
    setScore(0)
    setPlaying(true)
    setFinished(false)
  }
  
  return (
    <>
      {!playing && !finished &&
        <>
          <h1>Whac a Mole</h1>
          <button onClick={startGame}>Start Game</button>
        </>
      }
      {playing &&
        <>
          <button
            className="end-game"
            onClick={endGame}
           >
            End Game
          </button>
          <Score score={score} />
          <Timer
            time={TIME_LIMIT}
            onEnd={endGame}
          />
          <Moles>
            {new Array(NUMBER_OF_MOLES).fill().map((_, index) => (
              <Mole
                key={index}
                onWhack={onWhack}
                points={MOLE_SCORE}
                delay={0}
                speed={2}
              />
            ))}
          </Moles>
        </>
      }
      {finished && 
        <>
          <Score value={score} />
          <button onClick={startGame}>Play Again</button>
        </>
      }
    </>
  )
}

export default Game;
