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
`;

const DeleteIconStyles = styled.div`
    color: #FF595E;
    cursor: pointer;
    position: absolute;
    margin-left: 163px;
    margin-top: -45px;
`;

function Categories({ categoryValue, userId }) {
  const [newItem, setNewItem] = useState('');
  const [itemsList, setItemList] = useState('');

  const handleDelete = () => {
    const deleteRef = fire.database().ref(`${userId}/categories`).child(categoryValue.id);
    deleteRef.remove();
  }

  const handleAddItem = () => {
    const addItemRef = fire.database().ref(`${userId}/categories/`).child(`${categoryValue.id}/Items`);
    
    const addItem ={
      newItem,
    };

    addItemRef.push(addItem);
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
  }, []);


  return (
    <>
    <CategoryCards>
    <DeleteIconStyles onClick={handleDelete}><DeleteIcon/></DeleteIconStyles>
    <h1>{categoryValue.newCategory}</h1>
    <div>
      <input placeholder="Add Item" value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
      {itemsList ? itemsList.map((itemVal) => <Items itemVal={itemVal} userId={userId} categoryValue={categoryValue} />) : `Add an item!`}
    </CategoryCards>
    </>
  );
}

export default Categories;
