import logo from './logo.svg';
import './App.css';

let name = "Brijal Kansara";
let title = <h1>Hello {name}</h1>

let disc = <b>She is an MCA student and she is really good at her woek. Proud of you </b>
let para = <p>I am just a PAragraph. I am enjoying my work </p>
function App() {
  return (
    <>
    <div className="nav-bar">
      <li>Home</li>
      <li>About</li>
      <li>Login</li>
    </div>

    {/* do not use quotes near braces here not that thing, this is js variable. */}
    {/* Usign Javascript variables that containing JSX and strings variables. */}
    {title}
    {disc}
    {para }
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quisquam eius qui laboriosam ad tempora sit voluptatum quae vero dolorem. Nesciunt natus officia eum inventore quos nostrum assumenda aperiam velit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo excepturi sed, inventore corporis velit nihil unde, deserunt autem natus, sapiente commodi ea nemo itaque aut cumque voluptates culpa expedita nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sapiente quo alias vero esse maiores necessitatibus deserunt accusamus voluptate culpa assumenda rem, minus tenetur fugiat, quod ipsum, nobis voluptatibus inventore.
    
    Ex magnam officia, aliquam culpa provident assumenda corporis quas qui repudiandae accusantium repellat adipisci modi laboriosam veritatis itaque at cupiditate quia consectetur placeat in eaque soluta quam iusto facere. Id?
    Fuga repudiandae, eveniet minus dolore perspiciatis cum? Non ipsa, qui, odit corporis omnis expedita magni exercitationem beatae assumenda, cupiditate quis a nostrum! Voluptatibus, iure architecto adipisci inventore soluta vero cumque!
    
       </p>
    <div className="main-app">
     Lovely
   </div></>
  );
}

export default App;
