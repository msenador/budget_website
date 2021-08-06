import React, { useEffect } from 'react';
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

  const handleDelete = () => {
    const deleteRef = fire.database().ref(`${userId}/categories`).child(val.id)
    deleteRef.remove();
  }

  return (
    <>
    
    <CategoryCards>
    <div onClick={handleDelete}><DeleteIcon/></div>
    <div><EditIcon/></div>
      {val.newCategory}
    </CategoryCards>
    </>
  );
}

export default Categories;
