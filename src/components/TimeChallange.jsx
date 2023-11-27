import { useState, useRef } from "react";
import { ResultModal } from "./ResultModal";
export const TimeChallange = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();
  const [timeExpire, setTimeExpire] = useState(false);
  const [timerStart, setTimerStart] = useState(false);

  const onStart = (e) => {
    timer.current = setTimeout(() => {
      setTimeExpire(true);
      dialog.current.open();
    }, targetTime * 1000);
    setTimerStart(true);
  };

  const handleStop = (e) => {
    clearTimeout(timer.current);
  };

  return (
    <>
      {timeExpire ? (
        <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      ) : null}
      <section className="challenge">
        <h2>{title}</h2>
        {timeExpire && <p>You Lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={timerStart ? handleStop : onStart}>
          {timerStart ? "Stop" : "Start"} Challenge
        </button>
        <p className={timerStart ? "active" : undefined}>
          {timerStart ? "Timer is Running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};
