import React from 'react';
import Criterias from './Criterias';
import { Redirect, Link } from 'react-router-dom';

// import LordsPicture from '../assets/lords.jpg';

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
    console.log();
  };

  render() {
    if (this.state.redirect) return <Redirect push to='/research' />;
    return (
      <main className='homepage-container'>
        <h1 className='userH1'>
          Welcome <Link to='/myprofile'>Philibert de Montalembert !</Link>
        </h1>
        <div className='homepage-content'>
          <Criterias
            profile={this.state.profile}
            handleChange={this.handleChange}
            handleChangeChkb={this.handleChangeChkb}
            handleAgeValue={this.handleAgeValue}
            handleSubmit={this.handleSubmit}
          />
          <section className='selection'>
            <div className='lords'>Test</div>
            <div className='knights'></div>
            <div className='olds'></div>
          </section>
        </div>
      </main>
    );
  }
}

export default Home;
