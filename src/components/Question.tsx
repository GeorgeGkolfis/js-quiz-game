import { useState } from "react";
import { type handleSelectAnswerParam } from "./Quiz.tsx";
import QUESTIONS from "../questions.js";

import QuestionTimer from "./QuestionTimer.tsx";
import Answers from "./Answers.js";

type QuestionProps = {
    index: number;
    onSelectAnswer: (answer: handleSelectAnswerParam) => void;
    onSkipAnswer: () => void;
};

export default function Question({ index, onSelectAnswer, onSkipAnswer }: QuestionProps) {
    const [answer, setAnswer] = useState<handleSelectAnswerParam>({
        selectedAnswer: "",
        isCorrect: null,
    });

    let timer = 20000;

    if (answer!.selectedAnswer) {
        timer = 1000;
    }

    if (answer!.isCorrect !== null) {
        timer = 2000;
    }

    function handleSelectAnswer(answer: string) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null,
        });

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer,
            });

            let answerTimeout = {
                selectedAnswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer,
            };

            setTimeout(() => {
                onSelectAnswer(answerTimeout);
            }, 2000); 
        }, 1000); 
    }

    let answerState = "";

    if (answer!.selectedAnswer && answer!.isCorrect !== null) {
        answerState = answer!.isCorrect ? "correct" : "wrong";
    } else if (answer!.selectedAnswer) {
        answerState = "answered";
    }

    return (
        <div id="question">
            <QuestionTimer key={timer} timeout={timer} onTimeout={answer!.selectedAnswer === "" ? onSkipAnswer : null} mode={answerState} />
            <h2>{QUESTIONS[index].text}</h2>
            <Answers
                answers={QUESTIONS[index].answers}
                selectedAnswer={answer!.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    );
}
