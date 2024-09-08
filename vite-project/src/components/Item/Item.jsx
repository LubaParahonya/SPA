import React from 'react'
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import style from './Item.module.css'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import { FaHeart } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";


const Item = ({title, deleteItem, id, colorLike, likeitem, edit}) => {
  const navigate = useNavigate()

  return (
    <div className={style.item}>
  <div className={style.mainBox} onClick={()=> navigate(`/products/${id}`)} >
    <Box  
    key={uuidv4()} 
    className={style.box} 
    component="section" 
    >
      {title}
    </Box>
  </div>
<div className={style.button}>
<div className={style.buttonDelete}>
<IconButton aria-label="delete" onClick={() => deleteItem(id)}>
<DeleteIcon  />
</IconButton>
</div>
<AiFillEdit className={style.edit} onClick={()=> {
  edit(id)
  navigate(`/edit/${id}`)}}/>
<div className={colorLike? style.likeActive :  style.like} onClick={() =>likeitem(id)}>
 <FaHeart />
</div>
 </div> 
 </div>
  )
}

export default Item


