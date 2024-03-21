// components/Result.js
import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
  const score = useSelector(state => state.quiz.score);

  return (
    <div>
      <h2>Result</h2>
      <p>Your score: {score}</p>
    </div>
  );
};

export default Result;
