import React from 'react'
import { v4 as uuidv4 } from "uuid";
import style from './Pagination.module.css'


const Pagination = ({countPage, totalCountPage, pagination}) => {
    const pageNunbers = []
    for(let i=1; i<= Math.ceil(totalCountPage/countPage); i++){
        pageNunbers.push(i)
    }
  return (
    <div className={style.mainBox}>
      <ul className={style.listPaginator}>
        {pageNunbers.map(num => (
            <li key={uuidv4()} className={style.itemPagination} onClick={()=> pagination(num)}>
                {num}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
