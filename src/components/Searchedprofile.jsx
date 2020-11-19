import React from 'react';
import axios from 'axios';
import Profile from './Profile';

const looking = {
  gender: 'female',
  age: {
    min: 18,
    max: 45,
  },
  city: 'Marseille',
};
class SearchedProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataFilter: [],
      isLoading: true,
      index: 0,
    };
  }

  componentDidMount = async () => {
    await this.fetchDataFromApi();
  };

  fetchDataFromApi = async () => {
    const {
      data: { results },
    } = await axios.get('https://randomuser.me/api/?results=100');
    this.setState({ data: [...results] });
    const filtered =
      looking.gender === 'both'
        ? this.state.data.filter(this.dataFilterAllGender)
        : this.state.data.filter(this.dataFilterSingleGender);
    this.setState({ dataFilter: [...filtered] });
    this.setState({ isLoading: false });
  };

  dataFilterAllGender = (item) =>
    item.dob.age >= looking.age.min && item.dob.age <= looking.age.max;

  dataFilterSingleGender = (item) =>
    item.gender === looking.gender &&
    item.dob.age >= looking.age.min &&
    item.dob.age <= looking.age.max;

  handleRandom = async () => {
    if (this.state.index === this.state.dataFilter.length - 1) {
      this.setState({ isLoading: true });
      this.setState({ index: 0 });
      await this.fetchDataFromApi();
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  };

  render() {
    const { dataFilter, isLoading, index } = this.state;
    if (isLoading) return <h1>Chargement</h1>;
    if (!dataFilter) return <h1>No data</h1>;
    return (
      <main className='profile-container'>
        <h1>Matching Profiles</h1>
        {<Profile data={dataFilter[index]} handleRandom={this.handleRandom} />}
      </main>
    );
  }
}

export default SearchedProfile;
