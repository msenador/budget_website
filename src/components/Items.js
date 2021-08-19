import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import fire from '../fire';
import CloseIcon from '@material-ui/icons/Close';

const XiconStyles = styled.span`
  color: #FF595E;
  height: 5px;
  cursor: pointer;
`;

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3px;
  margin-bottom: 3px;
`;

function Items({itemVal, userId , categoryValue}) {

  const handleDeleteItem = () => {
    const deleteItemRef = fire.database().ref(`${userId}/categories/`).child(`${categoryValue.id}/Items`).child(itemVal.id);
    deleteItemRef.remove();
  }
  
  return (
    <ItemsContainer>
    <XiconStyles><CloseIcon onClick={handleDeleteItem}/></XiconStyles>
    <div>{itemVal.newItem}</div>
    <div>{itemVal.itemPrice}</div>
    </ItemsContainer>
  );
}

export default Items;
