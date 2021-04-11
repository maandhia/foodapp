import React, { Fragment, useEffect } from 'react';
import RestaurantItem from './RestaurantItem';

const RestaurantItems = ({ restaurantslist }) => {
  return (
    <article>
      {restaurantslist?.map((restaurant, index) => (
        <RestaurantItem restaurant={restaurant} key={index} />
      ))}
    </article>
  );
};

export default RestaurantItems;
