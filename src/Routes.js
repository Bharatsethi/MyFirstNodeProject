
import React from 'react';
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';

function Routes() {
  return (
      <Switch>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Switch>
  );
}

export default Routes;