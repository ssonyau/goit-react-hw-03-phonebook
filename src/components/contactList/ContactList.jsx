import React from 'react';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';

const ContactList = ({ filterContacs, removeItem }) => {

  return (
    <ul>
      {filterContacs.map(value => (
        <ContactListItem
          key={value.id}
          name={value.name}
          number={value.number}
          removeItem={removeItem}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filterContacs: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })  
  ),
  removeItem: PropTypes.func.isRequired
};

export default ContactList;