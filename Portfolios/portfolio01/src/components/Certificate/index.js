import React from 'react';
import propTypes from 'prop-types';

const Certificate = ({ title, subtitle, issueDate, image }) => {
  return (
    <div>
      <h2>{ title }</h2>
      <h3>{ subtitle }</h3>
      <h5>{ issueDate }</h5>
      <img src={ image.url } alt={ image.alt } />
    </div>
  )
};

Certificate.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  issueDate: propTypes.string,
  image: propTypes.shape({
    url: propTypes.string,
    alt: propTypes.string,
  }),
};

Certificate.defaultProps = {
  title: '',
  subtitle: '',
  issueDate: '',
  image: {
    url: '',
    alt: '',
  },
};

export default Certificate;