import React from "react";

function Time({ isStart, onEnd }) {
  const TIME_LIMIT = 30000;
  const INTERVAL = 1000;
  const [timer, setTimer] = React.useState(TIME_LIMIT);

  React.useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevValue) => prevValue - INTERVAL);
    }, INTERVAL);

    return () => clearInterval(timerInterval);
  }, [isStart, onEnd]);

  React.useEffect(() => {
    if (isStart && timer <= 0) onEnd();
  }, [timer, onEnd, isStart]);

  return <div>Time: {timer}</div>;
}

export default Time;
