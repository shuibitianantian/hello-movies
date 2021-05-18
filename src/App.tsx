import "./App.css";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import { fetchTrending } from "./actions";
import { navBarTitles } from "./constants";
import { useSelector } from "react-redux";
import { HomePage } from "./components/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [posterImgs, setPosterImgs] = useState<string[]>([]);
  const [backdropImgs, setBackdropImgs] = useState<string[]>([]);

  const pageState = useSelector((state: any) => state.titleReducer);

  useEffect(() => {
    fetchTrending().then(([ps, bd]) => {
      setPosterImgs(ps);
      setBackdropImgs(bd);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar curPage={pageState.pageTitle} pages={navBarTitles} />
        </header>
        <section id="page-section">
          <Switch>
            <Route exact path="/">
              <HomePage posterImgs={posterImgs} backdropImgs={backdropImgs} />
            </Route>
            <Route exact path="/Movies">
              <div>This is movies page</div>
            </Route>
            <Route exact path="/Liked">
              <div>This is Liked page</div>
            </Route>
            <Route exact path="/Blocked">
              <div>This is blocked page</div>
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
