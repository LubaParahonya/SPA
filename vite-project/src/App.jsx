import { useState } from 'react'
import './main.css'
import { ListItem } from './components/Listitem/ListItem'
import {Routes,Route } from 'react-router-dom';
import { Card } from './components/Card';
import AddItem from './components/AddItem/AddItem';
import { useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import Edit from './components/Edit/Edit';


const apiUrl = 'https://jsonplaceholder.typicode.com/albums/'

function App() {
  const [listItem, setListItem] = useState([])
  const [valueNewItem, setValueNewItem] = useState(null)
  const [editValue, setEditValue] = useState()
  const [searhValue, setSearhValue] = useState('')
  const [likeItem, setLikeItem] = useState([])
  const [colorLike, setColorLike] = useState(false)
  const [currentListItem, setCurrentListItem] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [countPage] = useState(12)
  const lastCountIndex = currentPage * countPage
  const firstCountIndex = lastCountIndex - countPage
  const currentCount = listItem.slice(firstCountIndex, lastCountIndex)
  

  const getApiData = async () =>{
    try{
        const response = await fetch(apiUrl)
        .then(response => response.json())
        setListItem(response)  ///не забыть убрать
    }catch(error){
        console.log(error)
    }
}

useEffect(()=>{
    getApiData()
}, [])

const deleteItem = (id) =>{
    const updateList = listItem.filter(el => id !== el.id)
    setListItem(updateList)
    console.log(`удалили ${id}`)
}

const edit = (id) => {
  const uddateCard = listItem.filter(el => id === el.id)
  
  
  

}
const addNewItem = (e) =>{
    const newList = [valueNewItem, ...listItem]
    setListItem(newList)
    console.log(valueNewItem)
    setColorLike(!colorLike)
    // setValueNewItem(null)
    // e.target.reset();
}

const handelSubmit = (e) =>{
    e.preventDefault()
    setValueNewItem({userId: 1,
        id: uuidv4(), 
        title: e.target.value})
        console.log(valueNewItem)
}

const likeitem =(id)=>{
  const newLikeItem = listItem.filter(el => id === el.id)
  const newListItem = [...likeItem, ...newLikeItem]
  console.log(newListItem)
  setColorLike(!colorLike)
  setLikeItem(newListItem)
}

const filterItem = () =>{
  setCurrentListItem(listItem)
  setListItem(likeItem)
  console.log(likeItem)
  console.log(likeItem[0].title)
}

const allItem = () =>{
  setListItem([...currentListItem])
}

const pagination = (pageNumber)=>{
  setCurrentPage(pageNumber)
}

const handelSubmitSearh = (e) => {
  setSearhValue(e.target.value)
  console.log(searhValue)
 
}

const searhItem = currentCount.filter(el=> {
    return el.title.toLowerCase().includes(searhValue.toLowerCase())
  })


  return (
    <>
      <Routes>
        <Route path='/' element={<ListItem  listItem={listItem}
                                 deleteItem={deleteItem} 
                                 colorLike={colorLike} 
                                 likeitem={likeitem} 
                                 filterItem={filterItem} 
                                 allItem={allItem}
                                 countPage={countPage}
                                 totalCountPage={listItem.length}
                                 pagination={pagination}
                                 currentCount={currentCount}
                                 edit={edit}
                                 handelSubmitSearh= {handelSubmitSearh}
                                 searhItem={searhItem}
                                />} />
        <Route path='/create' element={<AddItem  addNewItem={addNewItem} handelSubmit={handelSubmit} valueNewItem={valueNewItem}/>}/>
        <Route path='/products/:id' element={<Card />}/>
        <Route path='/edit/:id' element={<Edit   edit={edit} editValue={editValue}/>}/>
      </Routes>
    </>
  )
}

export default App
