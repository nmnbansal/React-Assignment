import React, { useState, useCallback, useMemo, useEffect } from 'react';
import './App.css'; 

// Child Counter Component
const Counter = React.memo(({ count, onIncrement, onDecrement }) => {
  console.log('Counter rendered');
  return (
    <div className="counter">
      <button onClick={onDecrement} className="counter-button">-</button>
      <span className="counter-value">{count}</span>
      <button onClick={onIncrement} className="counter-button">+</button>
    </div>
  );
});

Counter.displayName = 'Counter';

const Timer = React.memo(({ timer, onStart, onStop, onPause }) => {
  console.log('Timer rendered');
  return (
    <div className="timer">
      <span className="timer-value">{formatTime(timer)}</span>
      <div className="timer-buttons">
        <button onClick={onStart} className="timer-button">Start</button>
        <button onClick={onStop} className="timer-button">Stop</button>
        <button onClick={onPause} className="timer-button">Pause</button>
      </div>
    </div>
  );
});

Timer.displayName = 'Timer';


const App = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  
  const increment = useCallback(() => setCount(prevCount => prevCount + 1), []);
  const decrement = useCallback(() => setCount(prevCount => prevCount - 1), []);

  
  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startTimer = useCallback(() => {
    setIsRunning(true);
  }, []);

  const stopTimer = useCallback(() => {
    setIsRunning(false);
    setTimer(0); 
  }, []);

  const pauseTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  const timerProps = useMemo(() => ({ timer, onStart: startTimer, onStop: stopTimer, onPause: pauseTimer }), [timer, startTimer, stopTimer, pauseTimer]);
  const counterProps = useMemo(() => ({ count, onIncrement: increment, onDecrement: decrement }), [count, increment, decrement]);

  return (
    <div>
      <h2 style={{textAlign:'center'}}>Parent Component</h2>
      <Counter {...counterProps} />
      <Timer {...timerProps} />
    </div>
  );
};

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

export default App;
