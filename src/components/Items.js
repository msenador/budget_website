import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import fire from '../fire';

function Items({itemVal, userId , categoryValue}) {

  const handleDeleteItem = () => {
    const deleteItemRef = fire.database().ref(`${userId}/categories/`).child(`${categoryValue.id}/Items`).child(itemVal.id);
    deleteItemRef.remove();
  }

    useEffect(() => {

    })

  return (
    <div>
    <span><DeleteIcon style={{ color: '#FF595E'}} onClick={handleDeleteItem}/></span>
    {itemVal.newItem}
    </div>
  );
}

export default Items;
