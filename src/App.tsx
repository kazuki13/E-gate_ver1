import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link,NavLink } from "react-router-dom";
import HOME from './js/view'
import Camera from './js/Camera'; //作成したpage1.jsを読み込んでいる
import Touroku from './js/touroku';
import App3 from './js/Camera';
import App4 from './js/view';
import React from 'react'


class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Camera />} />
          <Route path={`/Camera`} element={<Camera />} />
          <Route path={`/Touroku`} element={<Touroku />} />
          <Route path={`/`} element={<App4 />} />
        </Routes>
      </BrowserRouter>
    );
  };
}
function App2() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

export default App;