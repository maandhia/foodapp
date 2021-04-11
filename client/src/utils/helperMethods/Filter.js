export default (value, props) => {
  if (value.searchTerm === '') return props.onSubmit(props.businesses);
  let refinedRestaurants = [...props.businesses];

  refinedRestaurants = refinedRestaurants.filter((restaurant) => {
    if (
      restaurant?.categories?.some((cuisine) => {
        cuisine?.title?.toLowerCase().includes(value.searchTerm.toLowerCase());
      }) ||
      restaurant.name?.toLowerCase().includes(value.searchTerm.toLowerCase()) ||
      restaurant?.location?.address1
        ?.toLowerCase()
        .includes(value.searchTerm.toLowerCase()) ||
      restaurant?.location?.address2
        ?.toLowerCase()
        .includes(value.searchTerm.toLowerCase()) ||
      restaurant?.location?.city
        ?.toLowerCase()
        .includes(value.searchTerm.toLowerCase()) ||
      restaurant?.location?.zip_code
        ?.toLowerCase()
        .includes(value.searchTerm.toLowerCase()) ||
      restaurant?.location?.country
        ?.toLowerCase()
        .includes(value.searchTerm.toLowerCase()) ||
      restaurant?.location?.state
        ?.toLowerCase()
        .includes(value.searchTerm.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });

  if (refinedRestaurants.length) {
    props.onSubmit(refinedRestaurants);
  } else {
    //if the results are zero get the new list from the API, store it in Redux Store and retrurn null:

    props.onSubmit(null, value.searchTerm);
  }
};
