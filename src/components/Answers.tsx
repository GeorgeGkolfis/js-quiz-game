import { useRef } from "react";

type AnswersProps = {
    answers: string[];
    selectedAnswer: string;
    answerState: string;
    onSelect: (answer: string) => void;
}

export default function Answers({ answers, selectedAnswer, answerState, onSelect }: AnswersProps) {
    const shuffledAnswers = useRef<string[] | null>(null);

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5); 
    }

    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answer) => {
                const isSelected = selectedAnswer === answer;
                let cssClass = "";

                if (answerState === "answered" && isSelected) {
                    cssClass = "selected";
                }

                if ((answerState === "correct" || answerState === "wrong") && isSelected) {
                    cssClass = answerState;
                }

                return (
                    <li key={answer} className="answer">
                        <button onClick={() => onSelect(answer)} className={cssClass} disabled={answerState !== ""}>
                            {answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
