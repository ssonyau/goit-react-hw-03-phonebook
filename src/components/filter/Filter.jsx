import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ searchEngine, inputValue }) => {
  return (
    <input
      id="searchForm"
      name="searchForm"
      type="text"
      value={inputValue}
      onChange={searchEngine}
    />
  );
};

Filter.propTypes = {
  searchEngine: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};
export default Filter;