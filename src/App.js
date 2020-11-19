import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Messenger from './components/Messenger';
import Searchedprofile from './components/Searchedprofile';
import Home from './components/Home';
import Team from './components/Team';
import MyProfile from './components/MyProfile';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      looking: {
        gender: 'male',
        age: {
          min: 18,
          max: 45,
        },
        city: 'Marseille',
      },
      likedProfile: [],
    };
  }

  setLookingState = (item) => {
    this.setState({ looking: item });
  };

  addLikedProfile = (item) => {
    this.setState({ likedProfile: [...this.state.likedProfile, item] });
  };

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path='/messages' component={Messenger} />
          <Route path='/research'>
            <Searchedprofile
              looking={this.state.looking}
              addLikedProfile={this.addLikedProfile}
            />
          </Route>
          <Route path='/myprofile'>
            <MyProfile likedProfile={this.state.likedProfile} />
          </Route>
          <Route path='/team' component={Team} />
          <Route exact path='/'>
            <Home setLookingState={this.setLookingState} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
