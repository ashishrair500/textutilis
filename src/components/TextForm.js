import React, { useState } from 'react'
export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("uppercase was clicked" + text);
        let textchange = text.toUpperCase();
        setText(textchange);
        props.showAlert("Text changed to uppercase","Success");
    }
    const handleClear = () => {
        let textchange = "";
        setText(textchange);
       props.showAlert("Text cleared","Success");

    }
    const handleLpClick = () => {
        console.log("uppercase was clicked" + text);
        let textchange = text.toLowerCase();
        setText(textchange);
        props.showAlert("Text converted to Lowercase","Success");

    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
        //setText(event.target.value);
    }
    const [text, setText] = useState("");
  console.log(  text.split(" "));
/*var count =0;
  const array=text.split(" ");
for (let index = 0; index < array.length; index++) {
    
    if(array[index]==='') count++;
    
}
*/

    return (
        <>
            <div className="container"    >
                <h1 style={{color: props.mode==='dark'?'white':'black'}} >{props.heading}</h1>
                <div className="mb-3" ><textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#385074 ':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="mybox" rows="10"></textarea></div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLpClick}>Convert To Lowerercase</button>
                <button className="btn btn-primary mx-1 my-1 " onClick={handleClear}>Clear Text</button>
            </div>
            <div className="container" my="2"  style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>

              
                <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
                
                <p> {(text.split(" ").filter((element)=>{return element.length!==0}).length)*0.008} minute require to read</p>
                <h2>Preview</h2>
                <p> This is How Onchange working </p>
              
<p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
                
            </div>

        </>
    )
}