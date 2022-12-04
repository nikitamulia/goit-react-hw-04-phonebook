
import { useState, useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm"
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";


export default function App(){
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contact')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(()=>{
    localStorage.setItem('contact', JSON.stringify(contacts))
    },[contacts])

  
  const addContact = user => {
    if (contacts.some(contact => contact.name.toLowerCase() === user.name.toLowerCase())) {
      alert(`${user.name} is already in contacts.`);
      return;
    }
    setContacts([...contacts, user]);
  }
  const onChange = e => {
  const filter = e.target.value;
  setFilter(filter);
  };
  const onDelete = e => {
    const deletedContactId = e.target.value;
    setContacts(prevContacts => 
      prevContacts.filter(contact => contact.id !== deletedContactId));
    
  }
  const filterContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.trim().toLowerCase()))
  }

    return (
      <div
        className="App"
      >
       <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact}/>
       
       </div>
        {contacts.length>0 ? <h2>Contacts</h2> : <h2>There are no contacts</h2>}
        {contacts.length>0 &&  <Filter value = {filter} onChange = {onChange}/>}
        <ContactList  contacts={filterContacts()}  onDelete={onDelete}/>
      </div>
    );
  
  }