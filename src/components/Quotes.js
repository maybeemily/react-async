import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

function Quotes({ quoteArray }) {
  const quotes = quoteArray.map((quote, i) => (
    <li key={i}>
      <Quote quote={quote}/>
    </li>
  ));

  return (
    <ul>
      {quotes}
    </ul>
  );
}

Quotes.propTypes = {
  quoteArray: PropTypes.array.isRequired
};

export default Quotes;
