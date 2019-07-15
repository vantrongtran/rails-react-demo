import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from "./pages/About";

const App = () => {
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
    </Switch>
  </BrowserRouter>;
}

export default App;
