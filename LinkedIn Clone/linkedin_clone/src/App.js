import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Home from './components/Home'
import Header from './components/Header'
import React from 'react'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={ <Login/>}/>
        </Routes>
        <Routes>
          {/* <Route exact path="/home"  components = {{main:<Home/>, navbar: <Header/>}}/> */}
          <Route exact path="/home"  element = {<><Header/> <Home/></>}/>
        </Routes>
        {/* </Routes> */}
    </Router>
    </div>
  );
}

export default App;
