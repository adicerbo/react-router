import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
// import Stock from "./Stock";
import Dashboard from './pages/Dashboard';
import stockData from "./components/Data"
// import { Route } from 'react-router';

const App = () => {
  return (
    <div className="App">
     <Nav />
     <Switch />
      <Route exact path="/">

      </Route>
      <Route 
        path="/stocks"
        render={props => <Dashboard {...props} stockData={stockData} />}
      />
      <Switch />
    </div>
  );
}

export default App;
