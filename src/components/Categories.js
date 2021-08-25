import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import fire from '../fire';
import Items from './Items';

const CategoryCards = styled.div`
  background-color: aliceblue;
  text-align: center;
  padding: 50px;
  border-radius: 20px;
  width: 150px;
  text-transform: uppercase;
`;

const DeleteIconStyles = styled.div`
    color: #FF595E;
    cursor: pointer;
    position: absolute;
    margin-left: 163px;
    margin-top: -45px;
`;

const InputStyles = styled.input`
  border: none;
  margin-bottom: 5px;
  border-radius: 20px;
  width: 100px;
  height: 30px;
  ::-webkit-input-placeholder {
    text-align: center;
  }
`;

const AddItemButtonStyles = styled.div`
  margin-top: 10px; 
  margin-bottom: 10px; 
  background-color: lightgreen;
  border-radius: 20px; 
  border: none;
  box-shadow: -1px 3px 4px 0px grey;
  :active {
    border-style: unset;
    box-shadow: -4px 4px 4px 0px grey, 
    inset -2px 3px 1px rgb(0 0 0 / 30%), 
    inset 17px 2px 31px rgb(255 255 255 / 16%)
  }
`;

function Categories({ categoryValue, userId }) {
  const [newItem, setNewItem] = useState('');
  const [itemsList, setItemList] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemPriceList, setItemPriceList] = useState([]);

  const handleDelete = () => {
    const deleteRef = fire.database().ref(`${userId}/categories`).child(categoryValue.id);
    deleteRef.remove();
  }

  const handleAddItem = () => {
    if (newItem === '') {
      alert('**Item is empty')
    } else if (itemPrice === '') {
      alert('**Please enter item price')
    } else {
      const addItemRef = fire.database().ref(`${userId}/categories/`).child(`${categoryValue.id}/Items`);
      const addItem ={
        newItem,
        itemPrice,
      };
      addItemRef.push(addItem);
      setNewItem('');
      setItemPrice('');
      location.reload();
    }
  }

  const getItemPrice = () => {
    fire.database().ref(`${userId}/categories/`).child(`${categoryValue.id}/Items`).on('value', function(snap){
      snap.forEach(function(childNodes){
        const current = parseFloat(childNodes.val().itemPrice);
        itemPriceList.push(current);
  
         //This loop iterates over children of user_id
         //childNodes.key is key of the children of userid such as (20170710)
         //childNodes.val().name;
         //childNodes.val().time;
         //childNodes.val().rest_time;
         //childNodes.val().interval_time;
     });
   });
  }
  
  const totalSpentPerCategory = () => {
    return itemPriceList.reduce((a, b) => a + b, 0)
  }

  useEffect(() => {
    getItemPrice();
  },[])

  useEffect(() => {
    const addItemRef = fire.database().ref(`${userId}/categories/`).child(`${categoryValue.id}/Items`);
    addItemRef.on('value', (snapshot) => {
      const items = snapshot.val();
      const itemsList = [];
      for (const id in items) {
        itemsList.push({id, ...items[id]});
      }
      setItemList(itemsList);
    });
  }, [categoryValue]);


  return (
    <>
    <CategoryCards>
    <DeleteIconStyles onClick={handleDelete}><DeleteIcon/></DeleteIconStyles>
    <h1>{categoryValue.newCategory}</h1>
    <h1>Total spent: {totalSpentPerCategory() > 0 ? `$${totalSpentPerCategory()}` : `$0`}</h1>
    <div>
      <InputStyles placeholder="Add Item" value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
      <InputStyles placeholder="Item price" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} required/>
      <AddItemButtonStyles onClick={handleAddItem}>Add Item</AddItemButtonStyles>
    </div>
      {itemsList ? itemsList.map((itemVal, index) => 
      <Items 
      key={index} 
      itemVal={itemVal} 
      userId={userId} 
      categoryValue={categoryValue} />) : `Add an item!`}
    </CategoryCards>
    </>
  );
}

export default Categories;
