import React, { useState } from 'react';
import "./TextArea.css";

function TextArea() {
    const [input, setInput] = useState("");
    const corrections = {
        realy: "really",
        wierd: "weird"
    };

    function checkForWordMatch(e) {
        let textwords = e.split(" ");
        let lastTextWord = textwords[textwords.length - 1];
        let currentTextLength = e.length;
        let wordToCorrect = corrections[lastTextWord];
        if (corrections[lastTextWord] !== undefined) {
            e = e.slice(0, currentTextLength - lastTextWord.length) + wordToCorrect;
        }
        setInput(e);

    }

    return (
        <div>
            <h1>AutoCorrection check</h1>
            <div>Enter the text input below: It is realy wierd</div>
            <input
                className="textInput"
                type="text"
                onChange={(event) => checkForWordMatch(event.target.value)}
                value={input}>
            </input>
        </div>
    );
}

export default TextArea