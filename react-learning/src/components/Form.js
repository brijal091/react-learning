// we Have created hook here to create a state and use it in the form component
import React, {useState} from 'react'

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
                    <button onClick={handleClickLower} className="btn btn-danger mb-3 mx-5">Convert to Lowercase</button>
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
