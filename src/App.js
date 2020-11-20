import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Messenger from './components/Messenger';
import Messenger2 from './components/Messenger2';
import ConversationsList from './components/ConversationsList';
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

  removeLikedProfile = (item) => {
    const newTab = this.state.likedProfile.filter(
      (pro) => pro.login.uuid !== item.login.uuid
    );
    this.setState({ likedProfile: [...newTab] });
  };
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path='/messenger' component={ConversationsList} />
          <Route path='/message1' component={Messenger} />
          <Route path='/message2' component={Messenger2} />
          <Route path='/research'>
            <Searchedprofile
              looking={this.state.looking}
              addLikedProfile={this.addLikedProfile}
            />
          </Route>
          <Route path='/myprofile'>
            <MyProfile
              looking={this.state.looking}
              likedProfile={this.state.likedProfile}
              removeLikedProfile={this.removeLikedProfile}
            />
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
