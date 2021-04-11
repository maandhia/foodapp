import React from 'react';
import './ZeroResults.css';

const ZeroResults = (props) => {
  return (
    <main className='zeroResults__contianer'>
      <section className='text--center'>
        <h2 className='zeroResults__title'>Such Empty!</h2>

        <button className='big-button' onClick={props.onSubmit}>
          try a new search
        </button>
      </section>
    </main>
  );
};

export default ZeroResults;
