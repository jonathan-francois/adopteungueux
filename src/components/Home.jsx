import React from 'react';
import Criterias from './Criterias';

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
    e.preventDefault();
    const { profile } = this.state;
    if (profile.gender_male && profile.gender_female) {
      this.setState({
        looking: { ...profile.ageValue, city: profile.city, gender: 'both' },
      });
    } else if (profile.gender_female && !profile.gender_male) {
      this.setState({
        looking: { ...profile.ageValue, city: profile.city, gender: 'female' },
      });
    } else {
      this.setState({
        looking: { ...profile.ageValue, city: profile.city, gender: 'male' },
      });
    }
    document.location.href = '/research';
  };

  render() {
    return (
      <main className='homepage-container'>
        <h1>
          Welcome <span>Philibert de Montalembert !</span>
        </h1>
        <section className='lords'></section>
        <section className='selection'>
          <div className='MST'></div>
          <div className='richs'></div>
        </section>
        <Criterias
          profile={this.state.profile}
          handleChange={this.handleChange}
          handleChangeChkb={this.handleChangeChkb}
          handleAgeValue={this.handleAgeValue}
          handleSubmit={this.handleSubmit}
        />
      </main>
    );
  }
}

export default Home;
