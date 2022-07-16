import React from 'react'
import propTypes from 'prop-types';

const Card = ({ title, image, category }) => {
  return (
    <>
      <h2>{ title }</h2>
      <span>{ category }</span>
      <img src={ image.url } alt={ image.alt } />
    </>
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

export default Card;