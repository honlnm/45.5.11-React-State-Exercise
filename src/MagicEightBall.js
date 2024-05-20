import React, { useState } from "react";

import "./MagicEightBall.css";
import defaultAnswers from "./answers.json";
import { choice } from "./random";

function MagicEightBall({ answers = defaultAnswers }) {
    const [answer, setAnswer] = useState({
        msg: "Think of a Question.",
        color: "black",
    });

    function handleClick(evt) {
        setAnswer(choice(answers));
    }

    return (
        <div
            className="MagicEightBall"
            onClick={handleClick}
            style={{ backgroundColor: answer.color }}
        >
            <b>{answer.msg}</b>
        </div>
    );
}


export default MagicEightBall;