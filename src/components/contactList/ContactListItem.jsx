import React from 'react';
import PropTypes from 'prop-types';
const ContactListItem = ({ name, number, removeItem }) => {
  return (
    <li>
      <div className="itemContainer">
        <span>{name}: </span>
        <span>{number}</span>
        <button onClick={() => removeItem(name)}>Delete</button>
      </div>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default ContactListItem;