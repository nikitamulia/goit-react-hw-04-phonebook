import PropTypes from "prop-types";
import styles from './ContactForm.module.css';
import { nanoid } from "nanoid";
import { useState } from "react";

export default function ContactForm({addContact}){
  const [name, SetName] = useState('') 
  const [number, SetNumber] = useState('')

 const handleSubmit = e => {
        e.preventDefault();
        const cont = {
          name: name,
          number: number,
          id: nanoid(),
        };
        addContact(cont);
        SetName('')
        SetNumber('')
      };

 const handleChange = e => {
  const{name, value} = e.target
    switch(name){
      case 'name':
        SetName(value);
        break;

      case 'number':
        SetNumber(value);
        break;
        
      default:
        return;  
    }
  };



  return (
          <div className={styles.contactForm}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <p>Name</p>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <p>Number</p>
              <input
                type="tel"
                name="number"
                value={number}
                onChange={handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <div>
                <button className={styles.button} type="submit">Add contact</button>
              </div>
            </form>
          </div>
        )
}
ContactForm.propTypes={
  addContact: PropTypes.func.isRequired,
}