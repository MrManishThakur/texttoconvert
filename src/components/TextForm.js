import React, { useState } from "react";

export default function TextFrom(props) {
    const handleUpperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    };
    const handleCopyClick = () => {
        let text = document.getElementById("Mytext");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleRemoveSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Textarea:
                </label>
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    style={{ backgroundColor: props.mode === 'white', Color: props.mode === 'dark' ? 'white' : '#042743' }}
                    id="Mytext"
                    rows="6"
                ></textarea>
                <button
                    type="button"
                    className="btn btn-primary my-2"
                    onClick={handleUpperClick}
                >
                    ConvertToUpper
                </button>
                <button
                    type="button"
                    className="btn btn-primary mx-1 my-2"
                    onClick={handleLowerClick}
                >
                    ConvertToLower
                </button>
                <button
                    type="button"
                    className="btn btn-primary mx-1 my-2"
                    onClick={handleClearClick}
                >
                    ClearText
                </button>
                <button
                    type="button"
                    className="btn btn-primary mx-1 my-2"
                    onClick={handleCopyClick}
                >
                    CopyText
                </button>
                <button
                    type="button"
                    className="btn btn-primary mx-1 my-2"
                    onClick={handleRemoveSpaces}
                >
                    Remove Extra Spaces
                </button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your Text Summary</h1>
                <p>
                    {text.split(' ').length} words and {text.length} characters
                </p>
                <p>
                    Approximate {0.008 * text.split("").length} minutes will take time to
                    read this texts
                </p>
                <h2>Text Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
