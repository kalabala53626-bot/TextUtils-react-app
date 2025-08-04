import { useState } from "react";

function TextForm(props) {
    const [text, setText] = useState('');
    
    const Uppercase = () =>{
        console.log(" change UpperCase successfuly! ");
        let upperText = text.toUpperCase();
        // setText("when click botton they changed value that you read!")
        setText(upperText);
        props.showAlart("converted To uppercase!", "success");
        
    }
    const lowerCase = () =>{
        // console.log(" change successfuly! " + text);
        console.log(" change LowerCase successfuly! ");
        let lowerText = text.toLowerCase();
        // setText("when click botton they changed value that you read!")
        setText(lowerText);
        props.showAlart("converted To lowercase!", "success");
    }

    const RemoveText = () =>{
        let remove = '';
        setText(remove);
        props.showAlart("Text removed!", "success");
    }

    const CopyText = () =>{
        let text = document.getElementById('textBox')
        let copy = text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlart("copied to clipboard!", "success");
    }

    const RemoveSpaces = () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlart("Removed spaces!", "success");
    }
    
    const HandleOnChnage = (event) =>{
        console.log("On Change");
        setText(event.target.value);
    }
    
    //  Remove to the count the space to 1 word
    const wordCount = text.trim().split(/\s+/).filter(word => word.length !== 0).length;


    return (
        <>
        <div className="container my-3"  
                
                style={{
                    color:props.mode === "dark" || props.mode === "success" || props.mode === "danger"? "white" : "black"}}
                >
            <div className="mb-3">
                <h1 className="fw-bold">{props.heading}</h1>
                <textarea className="form-control" id="textBox" style={{color: props.mode==='dark'? 'white': 'black', backgroundColor: props.mode==='dark'? 'rgb(57, 70, 83': 'white' }}
                    rows="8" value={text} onChange={HandleOnChnage}>
                </textarea>
                
                <button disabled={text.length===0} className="btn btn-primary rounded-0 ms-2 mt-2" onClick={Uppercase}>
                    Press To Uppercase
                </button>
                <button disabled={text.length===0} className="btn btn-primary rounded-0 mt-2 ms-3" onClick={lowerCase}>
                    Press To LowerCase
                </button>
                <button disabled={text.length===0} className="btn btn-primary rounded-0 mt-2 ms-3" onClick={RemoveText}>
                    Remove Text
                </button>
                <button disabled={text.length===0} className="btn btn-primary rounded-0 mt-2 ms-3" onClick={CopyText}>
                    Copy Text
                </button>
                <button disabled={text.length===0} className="btn btn-primary rounded-0 mt-2 ms-3" onClick={RemoveSpaces}>
                    Remove Spaces
                </button>
            </div>
            <div
                className="container m-3"
                style={{
                    color:props.mode === "dark" || props.mode === "success" || props.mode === "danger"? "white" : "black"}}
                >
                <p>
                    <b className="fw-bold">{wordCount}</b> words and{" "}
                    <b className="fw-bold">{text.length}</b> character are read in{" "}
                    {0.008 * wordCount} Minutes
                </p>
                <h2 className="my-2">Preview</h2>
                <p>{text.length > 0 ? text : "Write something on text box to preview here..."}</p>
                </div>
    
        </div>
        </>
    );
}

export default TextForm;
