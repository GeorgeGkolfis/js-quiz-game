import { useState, useCallback } from "react";

import QUESTIONS from "../questions.js";

import Question from "./Question.js";
import Summary from "./Summary.js";

export type Answer = {
    selectedAnswer: string;
};

type AnswerState = {
    isCorrect: boolean | null;
};

export type handleSelectAnswerParam = (Answer & AnswerState) | null;

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState<handleSelectAnswerParam[]>([]);

    const activeQuestionIndex = userAnswers!.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer: handleSelectAnswerParam) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers} />;
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}
