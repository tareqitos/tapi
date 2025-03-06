"use client"; // Ensure this runs in the browser

import "@/styles/challenge.scss";
import { useState, useRef, useEffect } from "react";

export default function Challenge() {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  const inputRef = useRef(null);

  const exercises = [
    { sentence: "I would like to eat an", polishWord: "jabłko", correctAnswer: "apple" },
    { sentence: "She goes to", polishWord: "szkoła", correctAnswer: "school" },
    { sentence: "He drinks", polishWord: "woda", correctAnswer: "water" },
    { sentence: "They have a new", polishWord: "samochód", correctAnswer: "car" },
    { sentence: "We live in a small", polishWord: "dom", correctAnswer: "house" },
    { sentence: "The cat is on the", polishWord: "stół", correctAnswer: "table" },
    { sentence: "She reads a", polishWord: "książka", correctAnswer: "book" },
    { sentence: "I'm looking for my", polishWord: "klucze", correctAnswer: "keys" },
    { sentence: "He works at the", polishWord: "szpital", correctAnswer: "hospital" },
    { sentence: "We need to buy", polishWord: "chleb", correctAnswer: "bread" },
  ];

  useEffect(() => {
    if (inputRef.current && !isAnswerSubmitted && !completed) {
      inputRef.current.focus();
    }
  }, [currentExerciseIndex, isAnswerSubmitted, completed]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isAnswerSubmitted) {
      handleNextExercise();
      return;
    }

    const currentExercise = exercises[currentExerciseIndex];
    const isAnswerCorrect =
      userAnswer.toLowerCase().trim() === currentExercise.correctAnswer.toLowerCase();

    setIsCorrect(isAnswerCorrect);
    setIsAnswerSubmitted(true);

    if (isAnswerCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextExercise = () => {
    setFadeIn(false);
    setTimeout(() => {
      if (currentExerciseIndex < exercises.length - 1) {
        setCurrentExerciseIndex(currentExerciseIndex + 1);
        setUserAnswer("");
        setIsAnswerSubmitted(false);
      } else {
        setCompleted(true);
      }
      setFadeIn(true);
    }, 300);
  };

  const resetQuiz = () => {
    setCurrentExerciseIndex(0);
    setUserAnswer("");
    setIsAnswerSubmitted(false);
    setIsCorrect(false);
    setScore(0);
    setCompleted(false);
    setFadeIn(true);
  };

  const currentExercise = exercises[currentExerciseIndex];

  const renderSentenceWithInput = () => {
    return (
      <div className="exercise-sentence">
        <p>
          {currentExercise.sentence}{" "}
          {!isAnswerSubmitted ? (
            <span className="input-wrapper">
              <input
                type="text"
                ref={inputRef}
                className="borderless-input"
                placeholder="______"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit(e);
                  }
                }}
                autoFocus
              />
            </span>
          ) : isCorrect ? (
            <span className="correct-inline-answer">{userAnswer}</span>
          ) : (
            <>
              <span className="incorrect-inline-answer">{userAnswer}</span>{" "}
              <span className="correct-inline-answer">({currentExercise.correctAnswer})</span>
            </>
          )}
        </p>
      </div>
    );
  };

  return (
    <div className="app-container">
      <div className="app-card">
        <div className="app-header">
          <h1 className="app-title">LEARNING SESSION</h1>
        </div>

        {!completed ? (
          <div className={`exercise-container ${fadeIn ? "fade-in" : "fade-out"}`}>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${(currentExerciseIndex / exercises.length) * 100}%` }}
              ></div>
            </div>

            <p className="exercise-counter">
              Exercise {currentExerciseIndex + 1} of {exercises.length}
            </p>

            {renderSentenceWithInput()}

            <div className="polish-word">
              <p>
                Translate: <span>{currentExercise.polishWord}</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="answer-form">
              <button type="submit" className="action-button">
                {isAnswerSubmitted ? "Next Exercise" : "Check Answer"}
              </button>
            </form>
          </div>
        ) : (
          <div className="completion-container">
            <h2 className="completion-title">Quiz Completed!</h2>
            <p className="final-score">
              Your score: <span>{score} / {exercises.length}</span>
            </p>
            <p className="feedback-message">
              {score === exercises.length
                ? "Perfect score! Excellent job!"
                : score >= exercises.length * 0.7
                ? "Great job! Keep practicing!"
                : "Good effort! Practice makes perfect!"}
            </p>
            <button onClick={resetQuiz} className="action-button">
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
