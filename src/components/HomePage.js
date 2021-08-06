import React, { useEffect, useState } from 'react';
import fire from '../fire';
import Categories from './Categories';
import styled from 'styled-components';

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  grid-gap: 100px 200px;
  padding: 10px;
`;

const HomePage = ({ handleLogout, userId }) => {
  const [newCategory, setNewCategory] = useState('');
  const [categoryList, setCategoryList] = useState([]);


  const handleNewCategory = () => {
  const categoriesRef = fire.database().ref(`${userId}/categories`);

    const newCat = {
      newCategory,
    };
    categoriesRef.push(newCat);
  }

  useEffect(() => {
    console.log(`Home: ${userId}`);
  const categoriesRef = fire.database().ref(`${userId}/categories`);
    categoriesRef.on('value', (snapshot) => {
      const categories = snapshot.val();
      const categoryList = [];
      for (let i in categories){
        categoryList.push(categories[i]);
      }
      setCategoryList(categoryList);
    })
  },[])

  return (
    <div style={{ minWidth: '1200px'}}>
    <button onClick={handleLogout}>Logout</button>
    <h1>Welcome!</h1>
    <input type="text" placeholder="New Category" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}/>
    <button onClick={handleNewCategory}>Add Category</button>
    <div style={{ display: 'flex', justifyContent: 'center'}}>
    <CardsContainer>{categoryList ? categoryList.map(val => <Categories val={val} />) : 'Create a new category!'}</CardsContainer>
    </div>
    </div>
  )
};

export default HomePage;
