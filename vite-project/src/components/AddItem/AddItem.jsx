import React, { createRef } from 'react'
import style from './AddItem.module.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';


const AddItem = ({addNewItem, handelSubmit, valueNewItem}) => {
  const navigate = useNavigate()


    
  return (
    <form className={style.main} >
    <Box className={style.mainBox}>
      <p className={style.text}>Создай новый элемент</p>
       <TextField id="outlined-basic" label="Ведите текст элемента" variant="outlined" 
       onChange={handelSubmit} 
      //  value={valueNewItem}
       />
      <Button className={style.buttonAdd} variant="contained" onClick={addNewItem}>Добавить</Button>
    </Box>
    <Button className={style.back} onClick={()=> navigate('/')}>
    <ArrowForwardIosIcon fontSize='large' />
    </Button>
    </form>
  )
}

export default AddItem
