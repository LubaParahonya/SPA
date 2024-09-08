import React, { useState } from 'react'
import style from './ListItem.module.css'
import Box from '@mui/material/Box';
import { Item } from '../Item';
import { v4 as uuidv4 } from "uuid";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import  Pagination  from '../Pagiation/Pagination';
import TextField from '@mui/material/TextField';


export const ListItem = ({listItem, deleteItem, colorLike, likeitem , filterItem, allItem, countPage, totalCountPage, pagination, currentCount, edit,  handelSubmitSearh, searhItem}) => {
    const history = useNavigate()
  
  return (
    <>
    <div className={style.topBox}>
    <ButtonGroup className={style.boxMenu} variant="text" aria-label="Basic button group">
    <Button variant="contained" onClick={()=> allItem()}>Все</Button>
    <Button variant="contained" onClick={()=> filterItem()}>Избранное</Button>
    </ButtonGroup>
    <TextField id="filled-basic" label="Searh" variant="filled" onChange={handelSubmitSearh} className={style.searh}/>
    <Button variant="contained" onClick={()=> history('/create')}>Создать новую карточку</Button>
    </div>
    <Box component="section" className={style.listItem}>
        {Array.isArray(searhItem) ? searhItem.map(item => {
            const {id, title} = item
            return (
                <Item key={uuidv4()} title={title}
                                     id={id} 
                                     deleteItem={deleteItem}
                                     colorLike={colorLike} 
                                     likeitem={likeitem}
                                     edit={edit} /> 
            )                   
        }): null}     
    </Box>
    <Pagination countPage={countPage} totalCountPage={totalCountPage} pagination={pagination}/>
    </>
  )
}


