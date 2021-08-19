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
  borderRadius: 20px; 
  border: none;
  box-shadow: 5px 5px 13px 3px gray;
  :active {
    border-style: unset;
    box-shadow: 4px 4px 5px -2px rgba(0, 0, 0, 0.85), inset 2px 2px 2px rgba(0, 0, 0, 0.3),
    inset -2px -2px 4px rgba(255, 255, 255, 0.15);
  }
`;

function Categories({ categoryValue, userId }) {
  const [newItem, setNewItem] = useState('');
  const [itemsList, setItemList] = useState('');
  const [itemPrice, setItemPrice] = useState('');

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
    }
  }

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
    <div>
      <InputStyles placeholder="Add Item" value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
      <InputStyles placeholder="Item price" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} required/>
      <AddItemButtonStyles onClick={handleAddItem}>Add Item</AddItemButtonStyles>
    </div>
      {itemsList ? itemsList.map((itemVal, index) => <Items key={index} itemVal={itemVal} userId={userId} categoryValue={categoryValue} />) : `Add an item!`}
    </CategoryCards>
    </>
  );
}

export default Categories;
