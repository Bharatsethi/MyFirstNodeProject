
import React from 'react';
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import NodePostAPI from './Pages/NodePostAPI';
import Users from './Components/Users';

function Routes() {
  return (
      <Switch>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/nodeapi" element={<NodePostAPI/>}/>
      </Switch>
  );
}

export default Routes;