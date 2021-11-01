// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import fire from '../fire';
// import CloseIcon from '@material-ui/icons/Close';

// const XiconStyles = styled.span`
//   color: #FF595E;
//   height: 25px;
//   cursor: pointer;
//   border: solid 3px gray
// `;

// const ItemsContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 3px;
//   margin-bottom: 3px;
//   margin-left: -50px;
//   width: 240px;
//   padding: 5px;
// `;

// function Items({itemVal, userId , categoryValue}) {

//   const handleDeleteItem = () => {
//     const deleteItemRef = fire.database().ref(`${userId}/categories/`).child(`${categoryValue.id}/Items`).child(itemVal.id);
//     deleteItemRef.remove();
//     location.reload();
//   }

//   return (
//     <ItemsContainer>
//     <XiconStyles><CloseIcon onClick={handleDeleteItem}/></XiconStyles>
//     <div style={{ marginTop: '6px' }}>{itemVal.newItem}</div>
//     <div style={{ marginTop: '6px' }}>${itemVal.itemPrice}</div>
//     </ItemsContainer>
//   );
// }

// export default Items;
