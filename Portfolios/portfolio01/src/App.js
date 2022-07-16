import React from 'react';

import { Route } from 'react-router-dom';
import Routes from './Router';
// import Card from './components/Card';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <div>Hello World</div> }/>
    </Routes>
  );
}

export default App;
