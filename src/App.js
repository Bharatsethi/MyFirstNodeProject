import logo from './logo.svg';
import './App.css';
import Component from './BharatSethi';
import MiddleComponent from "./MiddleComponent";
import Home from './Pages/Home';
import About from './Pages/About';
import { useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';

function App() {

  const [data,setdata] = useState(`I am learning react`);
  return (

    <div>

      <Routers>
      <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
          {/* Add more routes as needed */}
      </Routers>
              
  
      <h1>Parent Component</h1>
      <Component></Component>
      <MiddleComponent data={data}></MiddleComponent>
      <Routes/>
      </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
