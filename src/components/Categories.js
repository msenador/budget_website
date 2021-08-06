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
  const [updateCategory, setUpdateCategory] = useState('');

  const handleDelete = () => {
    const deleteRef = fire.database().ref(`${userId}/categories`).child(val.id)
    deleteRef.remove();
  }

  const handleEdit = () => {
    const postData ={
      newCategory: updateCategory,
    };

    const editCategory = fire.database().ref(`${userId}/categories`).child(val).push().key;

    const updates = {};
    updates[editCategory] = updateCategory;

    return fire.database().ref().update(updates);
  }

  useEffect(() => {
    setUpdateCategory(updateCategory)
  },[updateCategory]);


  return (
    <>
    <CategoryCards>
    <div onClick={handleDelete}><DeleteIcon/></div>
    <div>
      <EditIcon/>
      <input placeholder="Edit" value={updateCategory} onChange={(e) => setUpdateCategory(e.target.value)}/>
      <button onClick={handleEdit}>Update</button>
    </div>
      {val.newCategory}
    </CategoryCards>
    </>
  );
}

export default Categories;
