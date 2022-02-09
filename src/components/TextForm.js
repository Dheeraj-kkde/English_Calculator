import React, {useState} from 'react';

const TextForm = (props) => {

  const [text, setText] = useState('');
  //text = "asdsafagsg"; //wrong way to change the state
  //setText("asfsasdasfa"); //correct way to change the state
  
  const handleUpClick = () => {
    // console.log("Uppercase was clicked!!!" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }

  const handleOnChange = (event) => {
    // console.log("handleOnChange!!!");
    setText(event.target.value);
  }

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }

  const handleClearClick = () => {
    setText('');
    props.showAlert("Cleared the text","success");
  }

  const handleCopyClick = () => {
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed the extra spaces","success");
  }

  return (
    <>
    <div className='inputContainer' style={{color:props.mode==='light'? 'black':'white'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" 
        value={text} 
        onChange={handleOnChange} 
        style={{backgroundColor:props.mode==='light'? 'white':'#073f90', 
                color:props.mode==='light'? '#073f90':'white'}} 
        id="myBox" 
        rows="10">
        </textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="summaryContainer my-3" style={{color:props.mode==='light'? 'black':'white'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*(text.split(" ").length)} Mintues read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter some text to preview'}</p>
    </div>
    </>
  );
};

export default TextForm;
