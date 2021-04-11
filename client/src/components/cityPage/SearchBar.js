import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import './SearchBar.css';
import filter from '../../utils/helperMethods/Filter';

const SearchBar = (props) => {
  const searchTermSchema =
    props.component === 'SortAndFilter' &&
    yup.object({
      searchTerm: yup.string(),
    });
  const locationSchema =
    props.component === 'CitySearchBar' &&
    yup.object({
      location: yup.string().required(),
    });

  return (
    <Formik
      validationSchema={searchTermSchema || locationSchema}
      initialValues={
        props.component === 'SortAndFilter'
          ? { searchTerm: '' }
          : { location: '' }
      }
      onSubmit={(value) => {
        props.component === 'SortAndFilter'
          ? filter(value, props)
          : props.onSubmit(value);
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form id='cover' autoComplete='off'>
          <div className='tb'>
            <div className='td'>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={
                  props.component === 'SortAndFilter'
                    ? values.searchTerm
                    : values.location
                }
                type='text'
                name={
                  props.component === 'SortAndFilter'
                    ? 'searchTerm'
                    : 'location'
                }
                placeholder={
                  props.component === 'SortAndFilter'
                    ? 'refine your search...'
                    : 'enter a city...'
                }
                aria-label={
                  props.component === 'SortAndFilter'
                    ? 'Enter a keyword to refine your search results'
                    : 'Enter a city to find businesses'
                }
              />
            </div>
            <div className='td' id='s-cover'>
              <button
                className='searchButton'
                type='submit'
                role='button'
                aria-label='Search'
              >
                <div id='s-circle'></div>
                <span></span>
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
