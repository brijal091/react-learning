// we Have created hook here to create a state and use it in the form component
import React, {useState} from 'react'

export default function Form(props) {
    {/* this is basic syntax in which we are creating a varible text which has default value "Enter your text Here" and whenever we want to chagne this, we can use setText to change it.  we can not change it dairectly, beacuse it's a state. so react dosen't allow us to change this dairectly, so we need hooks to change this. we can only change it by setText. */}
    const [text,setText] = useState('Enter your Text Here');
    const change = () =>{
        console.log("Hello")
    }
    {/* changing the value of text state here by the following */}
    // text = "Hello World"; worong way to change the state
    return (
        <div>
        <h2 className="mt-5">{props.heading}</h2>
        <form className="row g-3">
            <div className="mb-2">
                <textarea className="form-control" value={text} id="textarea" rows="10" onChange={change}></textarea>
            </div>        
            <div className="col-auto">

                {/* We can use setText like the following */}
                <button onClick={() => setText("I am New Text. Add Me")} type="submit" className="btn btn-primary mb-3">Convert to Uppecase</button>
            </div>
        </form>
    </div>
  )
}
