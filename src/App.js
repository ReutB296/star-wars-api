import './App.css';
import Film from "./components/film/index.js";
import TOC from "./components/TOC/index.js";
import FilmsProvider from './context/FilmsContext';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


function App() {
  return (
    <Router>
        <FilmsProvider>
            <div className= "Main_container">
              <TOC/>
        
              <Switch>
                <Route path="/film/:id" >
                    <Film/>
                </Route>
              </Switch>
              
            </div>
        </FilmsProvider> 
    </Router>
  );
}

export default App;
