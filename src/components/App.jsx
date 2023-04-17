import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  
componentDidMount(){
  const savedSettings = localStorage.getItem("contacts");
  if(savedSettings){const parsedSettings = JSON.parse(savedSettings);
    this.setState({contacts:parsedSettings})}

}

componentDidUpdate(){
  
  localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
}

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  searchEngine = evt => {
    evt.preventDefault();

    const newValue = evt.target.value;

    this.setState(prevState => ({
      filter: newValue,
    }));
  };

  addContact = fieldResult => {
    const newContact = {
      id: nanoid(),
      name: fieldResult.name,
      number: fieldResult.number,
    };

    let isAddedContact = this.state.contacts.some(
      item => item.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (!isAddedContact) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    } else {
      alert(`${newContact.name} is already in contacts`);
    }
  };

  removeItem = elemName => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== elemName),
    }));
  };
  render() {
    return (
      <div className={css.goitTemplateMarkup}>
        <div>
          <h1>Phonebook</h1>
          <ContactForm addContact={this.addContact} />

          <h2>Contacts</h2>
          <Filter
            searchEngine={this.searchEngine}
            inputValue={this.state.filter}
          />
          <ContactList
            filterContacs={this.filterContacts()}
            removeItem={this.removeItem}
          />
        </div>
      </div>
    );
  }
}