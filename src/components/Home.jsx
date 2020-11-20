import React from 'react';
import Criterias from './Criterias';
import { Redirect, Link } from 'react-router-dom';
import Housewives from '../assets/housewives.jpg';
import Olds from '../assets/olds.jpg';
import Courtesans from '../assets/courtesans.jpg';
import Border from '../assets/border.png';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        gender_female: false,
        gender_male: false,
        ageValue: {
          min: 18,
          max: 45,
        },
        city: '',
        noShower: false,
        showerMonth: false,
        showerWeek: false,
        relation: '',
      },
      looking: {
        gender: '',
        age: {},
        city: '',
      },
      redirect: false,
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      profile: {
        ...this.state.profile,
        [target.name]: target.value,
      },
    });
  };

  handleChangeChkb = ({ target }) => {
    this.setState({
      profile: {
        ...this.state.profile,
        [target.name]: target.checked,
      },
    });
  };

  handleAgeValue = (value) => {
    this.setState({ profile: { ...this.state.profile, ageValue: value } });
  };

  handleSubmit = (e) => {
    const { setLookingState } = this.props;
    e.preventDefault();
    const { profile } = this.state;
    if (profile.gender_male && profile.gender_female) {
      setLookingState({
        age: profile.ageValue,
        city: profile.city,
        gender: 'both',
      });
      this.setState({ redirect: true });
    } else if (profile.gender_female && !profile.gender_male) {
      setLookingState({
        age: profile.ageValue,
        city: profile.city,
        gender: 'female',
      });
      this.setState({ redirect: true });
    } else {
      setLookingState({
        age: profile.ageValue,
        city: profile.city,
        gender: 'male',
      });
      this.setState({ redirect: true });
    }
  };

  autoFind = (autoSearch) => {
    const { setLookingState } = this.props;
    if(autoSearch === 'goodHousewives') {
      setLookingState({
        age: {
          min: 28,
          max: 42,
        },
        city: 'Paris',
        gender: 'female',
      });
    this.setState({ redirect: true });
    }
    else if(autoSearch === 'courtesans') {
      setLookingState({
        age: {
          min: 18,
          max: 25,
        },
        city: 'Verdun',
        gender: 'female',
      });
    this.setState({ redirect: true });
    }
    else if(autoSearch === 'olds') {
      setLookingState({
        age: {
          min: 45,
          max: 70,
        },
        city: 'Marseille',
        gender: 'female',
      });
    this.setState({ redirect: true });
    }
  };

  render() {
    if (this.state.redirect) return <Redirect push to='/research' />;
    return (
      <main className='homepage-container'>
        <h1 className='userH1' id="tittleHome">
          Welcome <Link to='/myprofile'>Philibert de Montalembert !</Link>
        </h1>

        <div className='homepage-content'>
          <section className='intro'>
            <h3 className='intro-title'>Our best matches for you, Messire</h3>
            <img className='border-medieval' src={Border} alt='' />
          </section>
          <section className='selection'>
            <div onClick={()=>this.autoFind("goodHousewives")}>
              <img className='selection-pic' src={Housewives} alt='' />
            </div>
            <div onClick={()=>this.autoFind("courtesans")}>
              <img className='selection-pic' src={Courtesans} alt='' />
            </div>
            <div onClick={()=>this.autoFind("olds")}>
              <img className='selection-pic' src={Olds} alt='' />
            </div>
          </section>
          <Criterias
            profile={this.state.profile}
            handleChange={this.handleChange}
            handleChangeChkb={this.handleChangeChkb}
            handleAgeValue={this.handleAgeValue}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </main>
    );
  }
}

export default Home;
