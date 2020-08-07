import React from 'react';

import './App.css';
import {Switch, Route} from 'react-router-dom'
import Form from './Home/form'
import Home from './Home/home'
function App() {
  return (
    <Switch>
      <Route path="/form"><Form /></Route>
      <Route exact path="/"><Home /></Route>

    </Switch>
  );
}

export default App;
