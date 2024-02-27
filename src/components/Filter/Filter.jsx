import styles from './Filter.module.css';

const Filter = ({ filter, handleFilterChange }) => {
  const handleChange = e => {
    handleFilterChange(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={handleChange}
      className={styles.input}
    />
  );
};

export default Filter;