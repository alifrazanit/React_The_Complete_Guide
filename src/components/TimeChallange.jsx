import { useState } from "react";

export const TimeChallange = ({ title, targetTime }) => {
  const [timeExpire, setTimeExpire] = useState(false);
  const [timerStart, setTimerStart] = useState(false);

  const onStart = (e) => {
    const timer = setTimeout(() => {
      setTimeExpire(true);
    }, targetTime * 1000);
    setTimerStart(true)
    const clearTimer = () => {
      clearTimeout(timer);
    };

    return clearTimer; 
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timeExpire && <p>You Lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <button onClick={onStart}>
        {timerStart ? "Stop" : "Start"} Challenge
      </button>
      <p className={timerStart ? "active" : undefined}>
        {timerStart ? "Timer is Running..." : "Timer inactive"}
      </p>
    </section>
  );
};
