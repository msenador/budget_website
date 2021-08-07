import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import fire from '../fire';
import Categories from './Categories';

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  grid-gap: 25px 40px;
  padding: 10px;
`;

const HomePage = ({ handleLogout, userId }) => {
  const [newCategory, setNewCategory] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  const [deleteId, setDeleteId] = useState('');

  const handleNewCategory = () => {
    const categoriesRef = fire.database().ref(`${userId}/categories`);

    const newCat = {
      newCategory,
    };
    const newPush = categoriesRef.push(newCat);
    const newId = newPush.key;
    console.log(`NEW: ${newId}`)
    setDeleteId(newId);
  };

  useEffect(() => {
    console.log(`Home: ${userId}`);
    const categoriesRef = fire.database().ref(`${userId}/categories`);
    categoriesRef.on('value', (snapshot) => {
      const categories = snapshot.val();
      const categoryList = [];
      for (const id in categories) {
        categoryList.push({id, ...categories[id]});
      }
      setCategoryList(categoryList);
    });
  }, []);

  return (
    <div style={{ minWidth: '850px' }}>
      <button onClick={handleLogout}>Logout</button>
      <h1>Welcome!</h1>
      <input type="text" placeholder="New Category" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
      <button onClick={handleNewCategory}>Add Category</button>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CardsContainer>{categoryList ? categoryList.map((val) => <Categories 
        val={val} deleteId={deleteId} userId={userId}
        />) : 'Create a new category!'}</CardsContainer>
      </div>
    </div>
  );
};

export default HomePage;
