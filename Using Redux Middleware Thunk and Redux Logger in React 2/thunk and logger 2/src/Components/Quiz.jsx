// components/Quiz.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuiz } from '../Redux/quizActions';

const Quiz = () => {
  const dispatch = useDispatch();
  const quiz = useSelector(state => state.quiz.quiz);

  useEffect(() => {
    dispatch(fetchQuiz()); // Fetch quiz questions on component mount
  }, [dispatch]);

  return (
    <div>
      <h2>Quiz</h2>
      {quiz.map((question, index) => (
        <div key={index}>
          <h3>{question.title}</h3>
          <p>{question.description}</p>
        </div>
      ))}
      {/* Add options to submit or skip the quiz */}
    </div>
  );
};

export default Quiz;
