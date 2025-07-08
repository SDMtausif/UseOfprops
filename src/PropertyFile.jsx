import React from 'react';
import PropTypes from 'prop-types';

const PropertyFile = (props) => {
  return (
    <div id="myId">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
};


export default PropertyFile;
