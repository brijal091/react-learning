import Navbar from './components/Navbar';
import Form from './components/Form';
// import About from './components/About';
import { useState } from 'react';
import $ from 'jquery'

function App() {
  const [mode, setMode] = useState('light'); // it shows that weather the Dark mode is enabled or not
  const [switchMode,setswitchMode] = useState('Darkmode');
  const tooglemode = () => {
    if(mode === 'light'){
      setMode('dark');
      $('body').css('background-color', 'rgb(105, 105, 115)');
      $("#main-container-body").attr('style', "Filter: invert(100%);")
      setswitchMode("LightMode");
      // We are using Ternary operator of javascript so i have commented it
      // $(".form-check-label").addClass("text-light")
    }
    else{
      setMode('light');
      $('body').css('background-color', 'white');
      $("#main-container-body").attr('style', "Filter: invert(0%);")
      setswitchMode("Darkmode");
      // We are using Ternary operator of javascript so i have commented it
      // $(".form-check-label").removeClass("text-light")
    }
  }
  return (
    <>
    {/* i have created one module with Navbar and adding props inside */}
    <Navbar title="TextUtils" mode = {mode} toogleMode={tooglemode} switchMode={switchMode}/>
    {/* if no props are set then default will be loded */}
    {/* <Navbar /> */}

    <div id="main-container-body">
    {/* if you want to see this form then uncomment it. */}
    <div className="container">
      <Form heading="Enter the Text to Analyze"/>
    </div>

{/* component ot add Dark mode in out App */}
{/* if you want to see this form then uncomment it. */}
    {/* <div className="container">
      <About />
    </div> */}
    </div>
   </>
  );
}

export default App;
