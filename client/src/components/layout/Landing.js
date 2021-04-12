import React from 'react';
import SearchBar from '../cityPage/SearchBar';
import { connect } from 'react-redux';
import { getRestaurants } from '../../actions/restaurant';
import './Landing.css';

const Landing = (props) => {
  const citySearch = ({ location }) => {
    props.history.push(`/city/${location}`);
  };
  return (
    <main className='landing__container'>
      <h1 className='landing__title'>Welcome to My Food App!</h1>
      <SearchBar component='CitySearchBar' onSubmit={citySearch} />
    </main>
  );
};

const mapStateToProps = ({ restaurant }) => ({
  restaurants: restaurant.restaurants,
  isLoading: restaurant.restaurants.loading,
});

export default connect(mapStateToProps, { getRestaurants })(Landing);
