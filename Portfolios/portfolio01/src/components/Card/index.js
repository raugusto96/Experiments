import React from 'react'
import propTypes from 'prop-types';

const Card = ({ title, image, category }) => {
  return (
    <div>
      <h2>{ title }</h2>
      <span>{ category }</span>
      <img src={ image.url } alt={ image.alt } />
    </div>
  )
};

Card.propTypes = {
  title: propTypes.string,
  image: propTypes.shape({
    url: propTypes.string,
    alt: propTypes.string,
  }),
  category: propTypes.string,
};

Card.defaultProps = {
  title: '',
  category: '',
  image: {
    url: '',
    alt: '',
  },
};

export default Card;