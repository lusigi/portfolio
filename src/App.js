import './App.css';
import Home from './components/Home'
import HireMe from './pages/HireMe';
import {Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
     
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/hire-me" exact component={ HireMe}/>
      </Switch>
        
        

        
    </div>
  );
}

export default App;
