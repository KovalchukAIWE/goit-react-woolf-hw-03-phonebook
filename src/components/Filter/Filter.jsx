import { Component } from 'react';
import styles from './Filter.module.css';

class Filter extends Component {
  handleFilterChange = e => {
    this.props.handleFilterChange(e.target.value);
  };

  render() {
    const { filter } = this.props;
    return (
      <input
        type="text"
        placeholder="Search contacts"
        value={filter}
        onChange={this.handleFilterChange}
        className={styles.input}
      />
    );
  }
}

export default Filter;
