import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Stock from "./pages/Stock";
import Dashboard from './pages/Dashboard';
import stockData from "./components/Data";
import About from './pages/About';
import Home from './pages/Home';
// import { Route } from 'react-router';

const App = () => {
  return (
    <div className="App">
     <Nav />
     <Switch />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route 
        path="/stocks"
        render={props => <Dashboard {...props} stockData={stockData} />}
      />
      <Route 
      path="/stocks/:symbol"
      render={props => <Stock stockData={stockData}{...props} />}
      />
      <Switch />
    </div>
  );
}

export default App;
