import React from 'react'
import style from './Edit.module.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const Edit = ({edit, editValue}) => {
    const navigate = useNavigate()
  return (
    <form className={style.main}>
    <Box className={style.mainBox}>
      <p className={style.text}>Редактируй карточку</p>
       <textarea className={style.inputEdit}  onChange={(e)=> e.target.value}/>
      <Button className={style.buttonAdd} variant="contained" >Внести изменения</Button>
    </Box>
    <Button className={style.back} onClick={()=> {navigate('/')}}>
    <ArrowForwardIosIcon fontSize='large' />
    </Button>
    </form>
  )
}

export default Edit
