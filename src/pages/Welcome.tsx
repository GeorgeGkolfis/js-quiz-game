import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

import backImg from "../assets/quiz-backround.png";
import quizImg from "../assets/quiz-logo.png";
import downArrowsImg from "../assets/down-arrows.png";

export default function WelcomePage() {
    const { scrollY } = useScroll(); 

    
    const yBack = useTransform(scrollY, [0, 200], [0, -100]);
    const opacityBack = useTransform(scrollY, [0, 100, 200, 500], [1, 0.3, 0.05, 0]); 
    const yQuiz = useTransform(scrollY, [0, 200], [0, -150]); 
    const opacityQuiz = useTransform(scrollY, [0, 400, 500], [1, 0.5, 0]);
    const yArrows = useTransform(scrollY, [0, 200], [0, -150]);
    const opacityArrows = useTransform(scrollY, [0, 300, 500], [1, 1, 0]);
    const yText = useTransform(scrollY, [0, 200, 300, 500], [0, 50, 50, 200]);
    const scaleText = useTransform(scrollY, [0, 300], [1, 1.5]); 
    const yInfo = useTransform(scrollY, [0, 200], [0, -150]); 
    const opacityInfo = useTransform(scrollY, [0, 300, 500], [1, 1, 0]);

    return (
        <>
            <div id="welcome-header">
                <motion.div id="welcome-header-content" style={{ scale: scaleText, y: yText }}>
                    <h1>Ready for a challenge?</h1>
                    <Link id="cta-link" to="/quiz">
                        Get Started
                    </Link>
                    <div>
                        <motion.img style={{ y: yQuiz, opacity: opacityQuiz }} src={quizImg} alt="A quiz logo....." id="quiz-image" />
                    </div>
                    <motion.div style={{ opacity: opacityInfo, y: yInfo }} id="info">Scroll Down</motion.div>
                    <div>
                        <motion.img
                            style={{ opacity: opacityArrows, y: yArrows }}
                            src={downArrowsImg}
                            alt="Scrolling down arrows....."
                            id="arrows-image"
                        />
                    </div>
                </motion.div>
                <motion.img
                    style={{ opacity: opacityBack, y: yBack }}
                    src={backImg}
                    alt="An abstract blue backround....."
                    id="back-image"
                />
            </div>
            <main id="welcome-content">
                <section>
                    <h2>What is a JavaScript Quiz Game?</h2>
                    <p>
                        A JavaScript quiz game is a fun and interactive way to test your knowledge of JavaScript concepts. From basics like
                        variables and functions to advanced topics like closures and async/await, it offers a dynamic learning experience
                        through challenging questions.
                    </p>
                </section>

                <section>
                    <h2>Why Play a JavaScript Quiz Game?</h2>
                    <p>
                        Playing a JavaScript quiz game sharpens your coding skills while keeping learning exciting. It&apos;s a great way to
                        reinforce your understanding, identify gaps in your knowledge, and stay motivated on your JavaScript learning
                        journey.
                    </p>
                </section>

                <section>
                    <h2>How Does the Game Work?</h2>
                    <p>
                        The quiz game presents you with multiple-choice questions on various JavaScript topics. Select the correct answer,
                        earn points, and track your progress. With every question, you improve your knowledge and coding intuition.
                    </p>
                </section>

                <section>
                    <h2>Are You Ready to Test Your Skills?</h2>
                    <p>
                        Dive into the JavaScript quiz game to challenge yourself and level up your coding expertise. Whether you&apos;re a
                        beginner or an experienced developer, there&apos;s always something new to learn. Let the fun begin!
                    </p>
                </section>
            </main>
        </>
    );
}
