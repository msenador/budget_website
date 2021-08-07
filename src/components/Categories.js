import React, { useEffect } from 'react';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import fire from '../fire';

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

  const handleDelete = () => {
    const deleteRef = fire.database().ref(`${userId}/categories`).child(val.id)
    deleteRef.remove();
  }

  return (
    <>
    <CategoryCards>
    <DeleteIconStyles onClick={handleDelete}><DeleteIcon/></DeleteIconStyles>
      {val.newCategory}
    </CategoryCards>
    </>
  );
}

export default Categories;
