import React from 'react';
import axios from 'axios';
import Profile from './Profile';

import { tabImageMale, tabImageFemale } from './tabImage.js'


class SearchedProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataFilter: [],
      isLoading: true,
      index: 0,
      indexImage: 0
    };
  }

  componentDidMount = async () => {
    await this.fetchDataFromApi();
  };

  fetchDataFromApi = async () => {
    const { looking } = this.props;
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
    item.dob.age >= this.props.looking.age.min &&
    item.dob.age <= this.props.looking.age.max;

  dataFilterSingleGender = (item) =>
    item.gender === this.props.looking.gender &&
    item.dob.age >= this.props.looking.age.min &&
    item.dob.age <= this.props.looking.age.max;

  handleRandom = async () => {
    if(this.state.indexImage === tabImageMale.length -1 ) {
      this.setState({indexImage: 0});
    } else {
      this.setState({ indexImage: this.state.indexImage + 1})
    }
    if (this.state.index === this.state.dataFilter.length - 1 ) {
      this.setState({ isLoading: true });
      this.setState({ index: 0 });
      await this.fetchDataFromApi();
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  };

  render() {
    const { dataFilter, isLoading, index, indexImage } = this.state;
    if (isLoading) return <h1>Chargement</h1>;
    if (!dataFilter) return <h1>No data</h1>;
    return (
      <div className='profile-container'>
      <h1>Matching Profiles</h1>
      <div >
        {
          <Profile
            data={dataFilter[index]}
            image={this.props.looking.gender === 'male' ? tabImageMale[indexImage] : tabImageFemale[indexImage] }
            handleRandom={this.handleRandom}
            addLikedProfile={this.props.addLikedProfile}
          />
        }</div>
      </div>
    );
  }
}

export default SearchedProfile;
