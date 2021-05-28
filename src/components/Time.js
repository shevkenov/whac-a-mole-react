import React, {useState, useEffect, useRef} from "react";

function Time({ onEnd, time, interval = 1000 }) {
  const [internalTime, setInternalTime] = useState(time)
  const timerRef = useRef(time)  
  const timeRef = useRef(time)
  useEffect(() => {
    if (internalTime === 0 && onEnd) {
      onEnd()
    }
  }, [internalTime, onEnd])
  useEffect(() => {
    timerRef.current = setInterval(
      () => setInternalTime((timeRef.current -= interval)),
      interval
    )
    return () => {
      clearInterval(timerRef.current)
    }
  }, [interval])
  return <div>{`Time: ${internalTime / 1000}s`}</div>
}

export default Time;
