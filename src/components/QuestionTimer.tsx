import { useState, useEffect } from "react";

type QuestionTimerProps = {
    timeout: number;
    onTimeout: (() => void) | null;
    mode: string;
}

export default function QuestionTimer({ timeout, onTimeout, mode }: QuestionTimerProps) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(onTimeout!, timeout);

        return () => {
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
        }, 10); 

        return () => {
            clearInterval(interval); 
        };
    }, []);

    return <progress className={mode} id="question-time" max={timeout} value={remainingTime}  />;
}
