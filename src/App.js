import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter />
      <BrowserRouter />
      <Route exact path="/" component={HomePage} />
      <Route path="/beers" component={AllBeers} />
      <Route path="RandomBeers" component={RandomBeer} />
    </div>
  );
}

export default App;
