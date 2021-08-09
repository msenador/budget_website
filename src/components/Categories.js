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

function Categories({ val, userId }) {
  const [newItem, setNewItem] = useState('');
  const [itemsList, setItemList] = useState('');

  const handleDelete = () => {
    const deleteRef = fire.database().ref(`${userId}/categories`).child(val.id);
    deleteRef.remove();
  }

  const handleEdit = () => {
    const addItemRef = fire.database().ref(`${userId}/categories/`).child(`${val.id}/Items`);
    
    const addItem ={
      newItem,
    };

    addItemRef.push(addItem);
  }

  useEffect(() => {
    const addItemRef = fire.database().ref(`${userId}/categories/`).child(`${val.id}/Items`);
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
    <div>
      <input placeholder="Add Item" value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
      <button onClick={handleEdit}>Add Item</button>
    </div>
      {val.newCategory}
      {itemsList ? itemsList.map((itemVal) => <Items itemVal={itemVal} />) : `Add an item!`}
    </CategoryCards>
    </>
  );
}

export default Categories;
