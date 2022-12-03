import React from "react";
import {ContactForm} from "./ContactForm/ContactForm"
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";


export class App extends React.Component{
  state = {
    contacts: [
     
    ],
    filter: ''
  }
  
  addContact = user => {
    if (this.state.contacts.some(contact => contact.name.toLowerCase() === user.name.toLowerCase())) {
      alert(`${user.name} is already in contacts.`);
      return;
    }
    this.setState(prevState =>  ({
      contacts: [...prevState.contacts, user],
    }));
  }
  onChange = (e) => {
  const filter = e.target.value;
  this.setState({ filter });
  };
  onDelete = (e) => {
    const deletedContactId = e.target.value;

    this.setState(prevState => {
      const contacts = prevState.contacts;
      const newArr = contacts.filter(contact => contact.id !== deletedContactId);

      return ({
        contacts: newArr
      })
    })
  }
  filterContacts = (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.trim().toLowerCase()))
  }
  componentDidMount(){
    const contacts = localStorage.getItem('contact')
    const parsedContacts = JSON.parse(contacts)
    if(parsedContacts){
      this.setState({contacts: parsedContacts})
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(this.state.contacts !== prevState.contacts){
      localStorage.setItem('contact', JSON.stringify(this.state.contacts))
    }
  }

  render(){
    const { contacts, filter } = this.state;
    const filtered = this.filterContacts(contacts, filter);
    return (
      <div
        className="App"
      >
       <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact}/>
       
       </div>
        {contacts.length>0 ? <h2>Contacts</h2> : <h2>There are no contacts</h2>}
        {contacts.length>0 &&  <Filter value = {this.state.filter} onChange = {this.onChange}/>}
        <ContactList  contacts={filtered}  onDelete={this.onDelete}/>
      </div>
    );
  };
  
  }
  