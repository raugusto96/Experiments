import React from 'react';
import { Routes } from 'react-router-dom';
import propTypes from 'prop-types';


const Router = ({ children }) => {
  return (
    <Routes>
      { children }
    </Routes>
  )
};

Router.propTypes = {
  children: propTypes.element,
}.isRequired;

export default Router;