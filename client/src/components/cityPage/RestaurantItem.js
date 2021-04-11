import React from 'react';
import './RestaurantItem.css';

const RestaurantItem = ({ restaurant }) => {
  return (
    <a href={restaurant.url} target='_blank'>
      <section className='restaurantCard'>
        <div className='restaurantCard__left'>
          <span
            role='img'
            aria-label={restaurant.name}
            style={{
              backgroundImage: `url(${restaurant.image_url})`,
            }}
          ></span>
          <div>
            <div
              className='restaurantCard__name'
              aria-label={`Restaurant Name: ${restaurant.name}`}
            >
              {restaurant.name}
            </div>
            <div
              className='restaurantCard__address'
              aria-label={`Restaurant Address: ${restaurant.location.display_address[0]}`}
            >
              {restaurant.location.display_address.map((address, index) => {
                return <div key={index}>{address}</div>;
              })}
            </div>
          </div>
        </div>

        <div className='restaurantCard__right'>
          <ul>
            {restaurant.categories.map((category, index) => {
              return (
                <li
                  key={index}
                  aria-label={`Restaurant Category ${index + 1}: ${
                    category.title
                  }`}
                >
                  {category.title}
                </li>
              );
            })}
          </ul>

          <div className='restaurantCard__ratingContianer'>
            <div
              className='restaurantCard__rating'
              aria-label={`Restaurant Rating: ${restaurant.rating}`}
            >
              {restaurant.rating}
            </div>
          </div>
        </div>
      </section>
    </a>
  );
};

export default RestaurantItem;
