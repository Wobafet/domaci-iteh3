
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 
'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Explore from './components/pages/Explore';
import Contact from './components/pages/Contact';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/explore' component={Explore}/>
          <Route path='/contacts' component={Contact}/>
          <Route path='/sign-up' component={SignUp}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
