import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {navBarTitles} from './constants'
import {useSelector} from "react-redux";

function App() {

  const pageState = useSelector((state: any) => state.pageReducer)

  return (
    <div className="App">
      <header className="App-header">
        <NavBar curPage={pageState.pageTitle} pages={navBarTitles}/>
      </header>
    </div>
  );
}

export default App;
