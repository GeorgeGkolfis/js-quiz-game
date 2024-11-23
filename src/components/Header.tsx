import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logoImg from "../assets/quiz-logo.png";

export default function Header() {
    function handleResetClick() {
        window.location.reload();
    }

    return (
        <header>
            <img src={logoImg} alt="Quiz logo" />
            <h1>JS Quiz Game</h1>
            <div id="main-header">
                <Link to="/">
                    <motion.button
                        key="button-home"
                        whileHover={{ scale: 1.1, backgroundColor: "#8b11f0" }} 
                        transition={{ type: "spring", stiffness: 500 }} 
                        className="button">
                        Home
                    </motion.button>
                </Link>

                <motion.button
                    key="button-reset"
                    whileHover={{ scale: 1.1, backgroundColor: "#8b11f0" }} 
                    transition={{ type: "spring", stiffness: 500 }} 
                    className="button"
                    onClick={handleResetClick}>
                    Reset
                </motion.button>
            </div>
        </header>
    );
}
