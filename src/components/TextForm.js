import React, {useState} from 'react'

export default function TextForm(props) {

    const textDisappear = ()=>{

        if(text == 'Enter text here')
        {
            let newText = "";
            setText(newText);
            return;
        }
        return;
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

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
    <>
    <div className="container" style={{color: props.mode=='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" onClick={textDisappear} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'#042743':'white'}} id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
    </div>    
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
    </div>
    </>
  )
}
