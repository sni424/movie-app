import React, { useEffect, useState } from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Detail from './routes/Detail';
import Home from './routes/Home.js';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Link exact to="/home"><h1>영화순위 보기</h1></Link>
        </Route>
        <Route path="/movie/:mid">
          <Detail></Detail>
        </Route>
        <Route path="/" >
          <Home ></Home>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
