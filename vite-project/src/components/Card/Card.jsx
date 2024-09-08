import React, { useState, useEffect } from 'react'
import { Item } from '../Item'
import {useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { CircularProgress } from '@mui/material';
import { v4 as uuidv4 } from "uuid";
import style from './Card.module.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



const Card = () => {
    const [dataOfCard, setdataOfCard] = useState(null)
    const cardId = useParams().id
    const apiUrl = `https://jsonplaceholder.typicode.com/albums/${cardId}`
    const navigate = useNavigate()

  
  
  
    const getApiCard = async () => {
      try{
        const response = await fetch(apiUrl)
        .then(response => response.json())
        setdataOfCard(response)
      }catch(error){
        console.log(error)
      }
    };

    useEffect(() => {
        if(cardId){
            getApiCard()
            console.log(dataOfCard) 
        }
    }, [cardId]);
  

    if (!cardId) {
        return (
          <Box sx={{ display: 'flex',
            width:'100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
    
           }}>
            <CircularProgress />
          </Box>
        );
      }
    
      if (!dataOfCard){
        return
        (
          <Box sx={{ display: 'flex',
            width:'100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
           }}>
            <CircularProgress />
          </Box>
        );
      }
    
  return (
    
    <div className={style.boxMain}>
      <Button variant="contained" className={style.backHome} onClick={()=> navigate('/')}>Вернуться к списку карточек</Button>
    <Item key={uuidv4()} 
    id={dataOfCard.id}
    title={dataOfCard.title}/>
    </div>   
  )
}

export default Card
