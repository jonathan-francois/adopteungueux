import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Messenger from './components/Messenger';
import Searchedprofile from './components/Searchedprofile';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/messages' component={Messenger} />
        <Route path='/research' component={Searchedprofile} />
        <Route path='/myprofile' component={Searchedprofile} />
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
