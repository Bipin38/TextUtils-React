import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleLowClick = ()=>{
        setText(text.toLowerCase())
    }
    const[text, setText] = useState('Enter text here');
    // setText("new text")
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"grey":"white", color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3" style={{color:props.mode==="dark"?"white":"#042743"}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes to read</p>

            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to Preview"}</p>
        </div>
        </>
        
    )
}
