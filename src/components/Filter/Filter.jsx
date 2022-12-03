import React from "react";
import PropTypes from "prop-types";
import styles from './Filter.module.css';

export const Filter = ({filter, onChange}) => {
  return(
      <div className={styles.filter}>
        <p> Find contacts by name</p>
        <input className={styles.filterInput} type="text" value = {filter} onChange = {onChange} />
      </div>
  )
}
Filter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}