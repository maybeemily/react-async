import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  const { name, status, species, image } = character;
  return (
    <section>
      <ul>
        <li><img src={image}/></li>
        <li>Name: {name}</li>
        <li>Status: {status}</li>
        <li>Species: {species}</li>
      </ul>
    </section>
  );

}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default Character;
