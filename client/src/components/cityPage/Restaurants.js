import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRestaurants } from '../../actions/restaurant';
import SearchBar from './SearchBar';
import RestaurantItems from './RestaurantItems';
import Spinner from '../layout/Spinner';
import ZeroResults from '../cityPage/ZeroResults';
import './Restaurants.css';

const Restaurants = (props) => {
  const [refinedList, setRefinedList] = useState(null);
  const location =
    props?.restaurants?.businesses?.length &&
    props?.restaurants?.businesses[0].location;

  useEffect(() => {
    if (
      props.match.params.cityName.toLowerCase() !== location?.city.toLowerCase()
    ) {
      props.getRestaurants({ location: props.match.params.cityName });
    }
  }, [props.getRestaurants, props.match.params.cityName]); //getRestaurants is an action creator

  const searchSubmitted = (refinedRestaurants, term = null) => {
    setRefinedList(refinedRestaurants);
    if (term) {
      props.getRestaurants({
        location: props.match.params.cityName,
        term,
      });
    }
  };
  const resetSearch = () => {
    props.getRestaurants({ location: props.match.params.cityName });
  };

  if (!props.isLoading && !location) {
    return <ZeroResults onSubmit={resetSearch} />;
  }

  return (
    <Fragment>
      {!props.isLoading ? (
        <main className='container--medium'>
          <aside aria-label='Change City' role='button'>
            <Link className='cityChange__button' to='/'>
              <i
                role='presentation'
                className='fa fa-arrow-circle-left'
                aria-hidden='true'
              ></i>
              change city
            </Link>
          </aside>
          <section className='resultsPanel'>
            <h2 className='resultsPanel__title'>
              showing businesses from{' '}
              <span>
                {location.city}, {location.country}
              </span>
            </h2>
            <SearchBar
              onSubmit={searchSubmitted}
              businesses={props.restaurants.businesses}
              city={props.match.params.cityName}
              component='SortAndFilter'
            />
          </section>

          <RestaurantItems
            restaurantslist={
              refinedList ? refinedList : props.restaurants.businesses
            }
          />
        </main>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ restaurant }) => ({
  restaurants: restaurant.restaurants,
  isLoading: restaurant.loading,
});

export default connect(mapStateToProps, { getRestaurants })(Restaurants);
