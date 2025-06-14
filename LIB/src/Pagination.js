import React from 'react';

import './footer.css';

const Pagination = (props) => {
  if (props.tot.length === 0) {
    return (
      <div className='mainbody'>
        <h3>HINT: TRY SOME NEW KEYWORD FOR SEARCH</h3>
      </div>
    )
  }

  let pages = [];
  for (let i = 1; i <= Math.ceil(props.tot.length / props.booksPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className='pagination'>
      {pages.map((page, index) => {
        return (
          <button key={index} onClick={() => props.setCurrentPage(page)} className={page === props.currentPage ? "active" : ""}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;