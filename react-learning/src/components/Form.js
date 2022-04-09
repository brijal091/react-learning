// we Have created hook here to create a state and use it in the form component
import React, {useState} from 'react'
// import $ from 'jquery'

export default function Form(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClickUpper = () =>{
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleClickLower = () =>{
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const handleClickClear = () =>{
        let newtext = '';
        setText(newtext)
    }
    const handleClickCopy = () =>{
        let content = text;
        navigator.clipboard.writeText(content)
    }
    const removeExtraSpace = () =>{
        let content = text;
        var myStr = content.replace(/[ ][ ]*/g, ' ');
        setText(myStr)
    }
    {/* this is basic syntax in which we are creating a varible text which has default value "Enter your text Here" and whenever we want to chagne this, we can use setText to change it.  we can not change it dairectly, beacuse it's a state. so react dosen't allow us to change this dairectly, so we need hooks to change this. we can only change it by setText. */}
    const [text,setText] = useState('');
    {/* changing the value of text state here by the following */}
    // text = "Hello World"; worong way to change the state
    return (
        <>
        <div className='container'>
            <h2 className="mt-5">{props.heading}</h2>
                <div className="mb-2">
                    <textarea className="form-control" value={text} id="textarea" rows="10" onChange={handleOnChange} placeholder="Enter Your Text Here"></textarea>
                </div>        
                <div className="col-auto">
                    {/* We can use setText like the following */}
                    <button onClick={handleClickUpper} className="btn btn-primary mb-3">Convert to Uppecase</button>
                    <button onClick={handleClickLower} className="btn btn-success mb-3 mx-3">Convert to Lowercase</button>
                    <button onClick={handleClickClear} className="btn btn-danger mb-3 ">Clear</button>
                    <button onClick={handleClickCopy} className="btn btn-dark mb-3 mx-3">Copy</button>
                    <button onClick={removeExtraSpace} className="btn btn-warning mb-3 mx-3">Remove Extra Spaces</button>
                </div>
        </div>
        <div className="container">
            <h2>Your Text Summery</h2>
            {/* i am doing minus one because by default js is taking a sinlgle space as one word.  */}
            <p>{text.split(" ").length-1} Words and {text.length} character</p>
            <p>{0.008 * text.split(" ").length} min To Read</p>
            <h3>PreView</h3>
            <p>{text}</p>
        </div>
        </>
  )
}
