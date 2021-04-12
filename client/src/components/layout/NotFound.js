import React, { Fragment } from 'react';
import fourofour from '../../utils/img/404.png';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <Fragment>
      <main data-testid='notFound' className='notFound__contianer'>
        <section className='text--center'>
          <aside style={{ marginBottom: '20px' }}>
            <Link className='cityChange__button' to='/'>
              home
            </Link>
          </aside>
          <h2 className='notFound__title'>Page Not Found</h2>
          <img
            className='notFound__image'
            src={fourofour}
            alt='Page not found, 404'
          />
        </section>
      </main>
    </Fragment>
  );
};

export default NotFound;


{
  "firstName": "Maan",
  "lastName": "Sidiki",
  "location": "Toronto",
  "experience":"3 years",
  "website":"https://sidiki.dev".
  "projects":[{"name":"Avid Math", "URL":"https://avidmath.com"},{"name":"Auxilium", "URL":"https://auxilium.sidiki.dev/"}],
  "passions": [
  "Web Development",
  "Technology",
  "Physics"
  ],
  "hobbies": [
  "Road cycling",
  "Reading",
  "Meditation"
  ],  
 
  }