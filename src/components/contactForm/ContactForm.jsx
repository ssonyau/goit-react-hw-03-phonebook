import React from 'react';
import PropTypes from 'prop-types';
const ContactForm = ({ addContact }) => {
  const onSubmitHandler = evt => {
    evt.preventDefault();
    const fieldResult = {
      name: evt.target.elements.contactName.value.trim(),
      number: evt.target.elements.contactPhone.value.trim(),
    };

    addContact(fieldResult);
    evt.target.reset();
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="contactName">Name</label>
      <input id="contactName" name="contactName" type="text" />
      <label htmlFor="contactPhone">Number</label>
      <input
        id="contactPhone"
        name="contactPhone"
        type="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />
      <button type="submit" className="submitButton">
        Add Contact
      </button>
    </form>
  );
};
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
export default ContactForm;