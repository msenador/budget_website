import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import fire from '../fire';
import CloseIcon from '@material-ui/icons/Close';

const XiconStyles = styled.span`
  color: #FF595E;
  height: 5px;
  cursor: pointer;
`;

function Items({itemVal, userId , categoryValue}) {

  const handleDeleteItem = () => {
    const deleteItemRef = fire.database().ref(`${userId}/categories/`).child(`${categoryValue.id}/Items`).child(itemVal.id);
    deleteItemRef.remove();
  }
  
  return (
    <div>
    <XiconStyles><CloseIcon onClick={handleDeleteItem}/></XiconStyles>
    {itemVal.newItem}
    </div>
  );
}

export default Items;
