import './App.css';
import Film from './components/film';
import TOC from "./components/TOC/index.js";
import Header from './components/header';
import FilmsProvider from './context/FilmsContext';
import Home from './components/home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";



function App() {
  return (
    <Router>
        <FilmsProvider>
            <div className= "page_container">
                  <Header/>
                  <div className="main_container">
                
                      <Switch>
                          <Route path="/" exact>
                              <TOC/>
                              <Home/>
                          </Route>
                          <Route path="/:title" >
                              <TOC/>
                              <Film/>
                          </Route>
                      </Switch>
                  </div>
            </div>
        </FilmsProvider> 
    </Router>
  );
}

export default App;
