import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upper case was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        // console.log("Handle on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here')
    // text = "new text"; //Wrong way to change the state
    //setText("new Text"); //Correct way
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
    </div>
  )
}
