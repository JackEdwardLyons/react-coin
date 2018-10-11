import React from 'react'
import './Pagination.css'

const Pagination = (props) => {
  const { page, totalPages, handlePaginationClick } = props

  return (
    <div className="Pagination">
      <button 
        disabled={ page <= 1 }
        className="Pagination-button"
        onClick={ () => handlePaginationClick('prev') }>
        &larr;
      </button>
      <span className="Pagination-info">Page <b>{ page }</b> of <b>{ totalPages }</b></span>
      <button
        disabled={ page >= totalPages } 
        className="Pagination-button" 
        onClick={ () =>  handlePaginationClick('next') }
      >
        &rarr;
      </button>
    </div>
  )
}

export default Pagination