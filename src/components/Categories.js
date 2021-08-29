import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import fire from '../fire';
import Items from './Items';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Expand from 'react-expand-animated';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const CategoryCards = styled.div`
  background-color: aliceblue;
  text-align: center;
  padding: 0px 50px;
  border-radius: 20px;
  width: 150px;
  text-transform: uppercase;
  min-height: 160px;
`;

const DeleteIconStyles = styled.div`
    color: #FF595E;
    cursor: pointer;
    position: absolute;
    margin-left: 167px;
    margin-top: 3px;
`;

const InputStyles = styled.input`
  border: none;
  margin-bottom: 5px;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  ::-webkit-input-placeholder {
    text-align: center;
  }
  &.placeholder {
    text-indent: 35px;
    ::placeholder {
      padding-right: 30px;
    }
  }
`;

const AddItemButtonStyles = styled.div`
  margin-top: 10px; 
  margin-bottom: 10px; 
  background-color: lightgreen;
  border-radius: 20px; 
  border: none;
  box-shadow: -1px 3px 4px 0px grey;
  :active {
    border-style: unset;
    box-shadow: -4px 4px 4px 0px grey, 
    inset -2px 3px 1px rgb(0 0 0 / 30%), 
    inset 17px 2px 31px rgb(255 255 255 / 16%)
  }
`;

function Categories({ categoryValue, userId }) {
  const [newItem, setNewItem] = useState('');
  const [itemsList, setItemList] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemPriceList, setItemPriceList] = useState([]);
  const [totalSpentPerCategory, setTotalSpentPerCategory] = useState('');
  const [totalSpent, setTotalSpent] = useState([]);
  const [priceError, setPriceError] = useState(false);
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  }

  const handleDelete = () => {
    const deleteRef = fire.database().ref(`${userId}/categories`).child(categoryValue.id);
    deleteRef.remove();
    location.reload();
  }

  const handleAddItem = () => {
    if (newItem === '') {
      alert('**Item is empty')
    } else if (itemPrice === '') {
      alert('**Please enter item price')
    } else {
      const addItemRef = fire.database().ref(`${userId}/categories/`).child(`${categoryValue.id}/Items`);
      const addItem ={
        newItem,
        itemPrice,
      };
      addItemRef.push(addItem);
      setNewItem('');
      setItemPrice('');
      location.reload();
    }
  }

  const getItemPrice = () => {
    fire.database().ref(`${userId}/categories/`).child(`${categoryValue.id}/Items`).on('value', function(snap){
      snap.forEach(function(childNodes){
        const current = parseFloat(childNodes.val().itemPrice);
        itemPriceList.push(current);
  
         //This loop iterates over children of user_id
         //childNodes.key is key of the children of userid such as (20170710)
         //childNodes.val().name;
         //childNodes.val().time;
         //childNodes.val().rest_time;
         //childNodes.val().interval_time;
     });
   });
  }
  
  const add = () => {
    setTotalSpentPerCategory(parseFloat(itemPriceList.reduce((a, b) => a + b, 0)).toFixed(2));
    totalSpent.push(totalSpentPerCategory);
  }

  const validateItemPrice = (e) => {
    const regex = /^[0-9]+$/;
    if (isNaN(e.target.value)){
      setPriceError(true);
    } else {
      setPriceError(false);
      setItemPrice(e.target.value);
    }
  }

  useEffect(() => {
    getItemPrice();
    add();
  },[categoryValue])

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
  }, [categoryValue]);


  return (
    <>
    {console.log(totalSpent)}
    <CategoryCards>
    <DeleteIconStyles onClick={handleDelete}><DeleteIcon/></DeleteIconStyles>
    <h1>{categoryValue.newCategory}</h1>
    <h4 style={{ marginTop: '-20px' }}>Total spent: {totalSpentPerCategory > 0 ? `$${totalSpentPerCategory}` : `$0`}</h4>
    
    <div>
      <InputStyles className="placeholder" placeholder="Add Item" value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
      <PostAddIcon style={{ color: 'gray', borderRight: 'solid gray 3px', position: 'absolute', marginLeft: '-102px', marginTop: '4px' }} />
      <InputStyles className="placeholder" placeholder="Item price" value={itemPrice} onChange={validateItemPrice} required/>
      <AttachMoneyIcon style={{ color: 'gray', borderRight: 'solid gray 3px', position: 'absolute', marginLeft: '-102px', marginTop: '4px' }} />
      <div style={{ color: 'red', fontSize: '10px' }}>{priceError ? '*Input must be a number' : ''}</div>
      <AddItemButtonStyles onClick={handleAddItem}>Add Item</AddItemButtonStyles>
    </div>
    <Expand open={expand}>
      {itemsList ? itemsList.map((itemVal, index) => 
      <Items 
      key={index} 
      itemVal={itemVal} 
      userId={userId} 
      categoryValue={categoryValue} />) : `Add an item!`}
      </Expand>
      {expand ? (
        <ExpandMoreIcon style={{ transform: 'rotate(-180deg)', marginTop: '-8px', fontSize: '50px' }} onClick={handleExpand}>expand</ExpandMoreIcon>
      ) : (
        <ExpandMoreIcon style={{ marginTop: '-8px', fontSize: '50px' }} onClick={handleExpand}>expand</ExpandMoreIcon>
      )}
    </CategoryCards>
    </>
  );
}

export default Categories;
