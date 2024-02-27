import styles from './ContactList.module.css';

const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <li className={styles.item} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={styles.button}
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
