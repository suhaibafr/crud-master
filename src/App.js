import './App.css';
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
    <div>
      <Switch>
        <Route path="/form" component={Form}/>
      </Switch>
    </div>
  </Router>
  </div>
  );
}

export default App;
