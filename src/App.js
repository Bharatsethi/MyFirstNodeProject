/*
Setup you NPM Account at https://docs.npmjs.com/creating-a-new-npm-user-account
install node from https://nodejs.org/en/download/ this will install NPM as well
Upgdare npm by npm install -g npm
Install Bootsdtrap: npm install bootstrap
Install React Dom: npm install next react react-dom
Install React BootStrap : npm install react-bootstrap bootstrap
Install Node Express: npm install express
Install Redux : npm install redux react-redux redux-thunk
Create React App	https://create-react-app.dev/docs/getting-started/
React Routing DOM	https://www.npmjs.com/package/react-router-dom
React Concepts	https://react.dev/reference/react
React Bootstrap	https://react-bootstrap.github.io/

Step 1: After installing all pre-req
npx create-react-app my-firstreact-project
cd my-firstreact-project
Step 2: Start to Create Components (.js files) add them to component folder
example components in this project: About, Footer, Header, Left, Middle, Right, Users
*/
import React from 'react';
import Routes from './Routes';
import { Link } from "react-router-dom";
import Users from './Components/Users';
import { Provider } from 'react-redux';
import { store } from './store';
//import store from './store';
//import { store } from './store';
import './App.css'; 
import FooterComp from './Components/Footer/FooterComp';
import HeaderComp from './Components/Header/HeaderComp';
import LeftComp from './Components/Left/LeftComp';
import RightComp from './Components/Right/RightComp';
import MiddleComp from './Components/Middle/MiddleComp';
function App() {
  return (
    <Provider store={store}> {/* Wrap the app with Provider and pass the Redux store */}
 
    <>
         <HeaderComp />
     
     <div className="container mt-4">
       <div className="row">
         <div className="col-md-3 col-sm-3">
           <LeftComp />
         </div>
         <div className="col-md-6 col-sm-6">
           <MiddleComp />
         </div>
         <div className="col-md-3 col-sm-3">
           <RightComp />
         </div>
       </div>
     </div>
     <FooterComp />
    </>
    </Provider>
  );
}

export default App;
