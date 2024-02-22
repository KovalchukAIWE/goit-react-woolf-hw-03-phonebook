import React, { Component } from 'react';
import styles from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts, filter, deleteContact } = this.props;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <ul className={styles.list}>
        {filteredContacts.map(contact => (
          <li className={styles.item} key={contact.id}>
            {contact.name}: {contact.number}
            <button className={styles.button} onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
