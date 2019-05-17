import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paging.css';

function Paging({ currentPage, totalPages, nextPage, children }) {
  return (
    <>
    {currentPage > 1 && 
      <button className={styles.Paging} onClick={() => nextPage(currentPage - 1)}>PreviousPage</button>}
      {`${currentPage} / ${totalPages}`}
      {currentPage < totalPages && 
      <button className={styles.Paging} onClick={() => nextPage(currentPage + 1)}>Next Page</button>}
      {children}
      </>
  );
}

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Paging;
