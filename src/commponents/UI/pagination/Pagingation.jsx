import React from 'react'
import {getPagesArray} from "../../../utils/pages";

const Pagingation = ({totalPage, page, changePage}) => {
	let pagesArray = getPagesArray(totalPage);
	console.log(pagesArray)

  return (
    <div className="page__wrapper">
     {pagesArray.map(p =>
        <span 
          onClick={() => changePage(p)}
          key={p} 
          className={page === p ? 'page page__current' : 'page '}
        >
          {p}
        </span>

      )}
     </div>
  )
}

export default Pagingation