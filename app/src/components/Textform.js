import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState("Enter text here");

    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClrClick = () => {
        console.log("Clear all text was clicked");
        setText("");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleClrClick}>Clear Text</button>
            <div className="container my-3">
                <h1>Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    );
}
