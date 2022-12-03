import React from "react";
import PropTypes from "prop-types";
import styles from './ContactForm.module.css';
import { nanoid } from "nanoid";


export class ContactForm extends React.Component {
  state = {
    name: '',
    number: ''
  };
  

  static defaultProps = {
    addContact: () => { }
  };

  static propTypes = {
    addContact: PropTypes.func,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };
    this.props.addContact(contact);
    this.setState({name: '', number: ''})
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className={styles.contactForm}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <p>Number</p>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
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
}
