import React from "react";
import Mole from "./Mole";
import Moles from "./Moles";
import Score from "./Score";
import Time from "./Time";

function Game() {
  const [start, setStart] = React.useState(false);
  const hanldeStart = () => setStart(!start);

  return (
    <>
      <h1>Whac-A-Mole</h1>
      <button onClick={hanldeStart}>{start ? "Stop" : "Start"}</button>
      <Time isStart={start} onEnd={hanldeStart}/>
      <Score />
      {start && (
        <Moles>
          <Mole />
          <Mole />
          <Mole />
          <Mole />
          <Mole />
        </Moles>
      )}
    </>
  );
}

export default Game;
