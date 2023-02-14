import React, { Components } from 'react';
import { nanoid } from 'nanoid';

import { Container, Title, Text } from './App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/Contacts/ContactList';
import Filter from 'components/Filter';


class App extends Components {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  handleSubmit = data => {
    const sameName = this.state.contacts.find(item => item.name.toLowerCase() === data.name.toLowerCase());
    if (sameName) return alert(sameName.name + ' already in your contacts');

    data.id = nanoid();
    this.setState( prev => ({ contacts: [data, ...prev.contacts] }));
  };
  
  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getContacts = () => {
    const { filter, contacts } = this.state;
    const lowerFilter = filter.toLowerCase();

    return contacts.filter(item => item.name.toLowerCase().includes(lowerFilter));
  };

  onDeleteContacts = id => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(item => item.id !== id), }))
  };
  
  render() {
    const { filter, contacts } = this.state;

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.handleSubmit} />
        <Title>Contacts</Title>
        <Text>Find contact</Text>
        <Filter value={filter} onChange={this.onChangeFilter} />
        {contacts.length ?
          (
            <ContactList
              contacts={this.getContacts()}
              onDelete={this.onDeleteContacts} />
          ) : (
        <Text>You havn't contacts yet</Text>
        )}
        
      </Container>
    );
  }
}

export default App;