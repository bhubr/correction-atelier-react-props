import React from 'react';
import PropTypes from 'prop-types';

function isMajor(age) {
  if (age < 18) {
    return 'minor';
  }
  return 'major';
}

// ` (backtick) 3ème delimiteur de chaine apres ' et "
function Avatar(props) {
  const fullName = `${props.firstName} ${props.lastName}`;
  return (
    <figure>
      <img src={props.image} alt={`Avatar for ${fullName}`} />
      <figcaption>
        {fullName}
        {' '}
        {isMajor(props.age)}
      </figcaption>
    </figure>
  )
}

Avatar.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default Avatar;
