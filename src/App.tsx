import React from "react";
import "./App.css";
// import "./css/homePage.css";

import NavBar from "./components/NavBar";
import { navBarTitles } from "./constants";
import { useSelector } from "react-redux";
import { HomePage } from "./components/HomePage";

function App() {
  const pageState = useSelector((state: any) => state.titleReducer);

  const conditionallyRenderPage = () => {
    switch (pageState.pageTitle) {
      case "Home":
        return <HomePage />;
      case "Liked":
        return <div>This is Liked page</div>;
      case "Blocked":
        return <div>This is blocked page</div>;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavBar curPage={pageState.pageTitle} pages={navBarTitles} />
      </header>
      <section id="page-section">{conditionallyRenderPage()}</section>
    </div>
  );
}

export default App;
