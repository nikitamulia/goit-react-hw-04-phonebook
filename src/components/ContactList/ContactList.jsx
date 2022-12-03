import React from "react";
import PropTypes from "prop-types";
import { ContactListItem } from "./ContactListItem";
import styles from './ContactList.module.css';


export const ContactList = ({contacts, onDelete}) => {
    return(
        <ul className={styles.ContactList}>
            {contacts.map(contact => {
                const {name, number, id} = contact || {}
                return <ContactListItem key = {id} name={name} number={number} onDelete={onDelete} id={id}/>
            })}
        </ul>
    )
}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })).isRequired,
      onDelete: PropTypes.func.isRequired,
}