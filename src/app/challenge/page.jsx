"use client"; // Ensure this runs in the browser

import { getExercise } from "@/hook/api";
import "@/styles/challenge.scss";
import { useState, useRef, useEffect } from "react";

export default function Challenge() {
  const [question, setQuestion] = useState([]);
  const [hint, setHint] = useState()
  const [answer, setAnswer] = useState()
  const [userAnswer, setUserAnswer] = useState();
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [maxQuestions, setMaxQuestions] = useState(10);
  const [score, setScore] = useState(0);


  const getApi = async () => {
    try {
      const { response, result } = await getExercise("En", "PL");
      if (response.ok) {
        const data = result.data
        setHint(data.questionHints)
        setAnswer(data.missingWords)
        setQuestion(data.question)
        console.log(data)
      }

    } catch (error) {
      console.log("Can't fetch api", error)
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if (isAnswerSubmitted) {
      handleNextExercise();
      return;
    }

    if (userAnswer) {
      setIsAnswerSubmitted(true);
      if (userAnswer.includes(answer)) {
        console.log(answer);
        setIsCorrect(true);
        setScore(score + 1);
      } else {
        console.log(userAnswer)
        setIsCorrect(false)
        console.log('Wroong')
      }
    }
  }

  const handleNextExercise = async () => {
    setFadeIn(false);

    await getApi();
    setTimeout(async () => {
      if (currentExerciseIndex < maxQuestions - 1) {
        setCurrentExerciseIndex(currentExerciseIndex + 1);
        setIsAnswerSubmitted(false);
      } else {
        setCompleted(true);
      }
      setFadeIn(true);
    }, 300);
  }

  const handleInputs = () => {
    if (question.includes("___")) {
      console.log("Heyaa")
    }
  }

  const resetQuiz = () => {
    setCurrentExerciseIndex(0);
    setUserAnswer("");
    setIsAnswerSubmitted(false);
    setIsCorrect(false);
    setScore(0);
    setCompleted(false);
    setFadeIn(true);
  };

  useEffect(() => {
    getApi();
    handleInputs();
  }, [])


  return (
    <>
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
                  style={{ width: `${(currentExerciseIndex / maxQuestions) * 100}%` }}
                ></div>
              </div>

              <p className="exercise-counter">
                Exercise {currentExerciseIndex} of {maxQuestions}
              </p>

              {question.map((part) => (
                <div key={part} className="exercise-sentence">
                  {part === "___" ? (
                    !isAnswerSubmitted ? (
                      <span className="input-wrapper">
                        <input
                          className="borderless-input"
                          type="text"
                          placeholder=""
                          onChange={(e) => setUserAnswer(e.target.value)}
                          onKeyDown={(e) => {
                            if ((e.key) === "Enter") handleSubmit(e)
                          }}
                          autoFocus />
                      </span>
                    ) : isCorrect ? (
                      <span className="correct-inline-answer">{userAnswer}</span>
                    ) : (
                      <>
                        <span className="incorrect-inline-answer">{userAnswer}</span>{" "}
                        <span className="correct-inline-answer">({answer})</span>
                      </>
                    )
                  ) : part}
                </div>
              ))}

              <div className="polish-word">
                <p>
                  Translate: <span>{hint}</span>
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
                Your score: <span>{score} / {maxQuestions}</span>
              </p>
              <p className="feedback-message">
                {score === maxQuestions
                  ? "Perfect score! Excellent job!"
                  : score >= maxQuestions * 0.7
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
    </>
  );
}