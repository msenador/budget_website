import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import fire from '../fire';

const CategoryCards = styled.div`
  background-color: aliceblue;
  text-align: center;
  padding: 50px;
  border-radius: 20px;
  width: 150px;
`;

function Categories({ val, userId }) {
  const [newItem, setNewItem] = useState('');

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
    setNewItem(newItem)
  },[newItem]);


  return (
    <>
    <CategoryCards>
    <div onClick={handleDelete}><DeleteIcon/></div>
    <div>
      <EditIcon/>
      <input placeholder="Add Item" value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
      <button onClick={handleEdit}>Add Item</button>
    </div>
      {val.newCategory}
    </CategoryCards>
    </>
  );
}

export default Categories;
