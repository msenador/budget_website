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

const HomePageContainer = styled.div`
  min-width: 850px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #20bf55;
  background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
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
    setDeleteId(newId);
  };

  useEffect(() => {
    const categoriesRef = fire.database().ref(`${userId}/categories`);
    categoriesRef.on('value', (snapshot) => {
      const categories = snapshot.val();
      const categoryList = [];
      for (const id in categories) {
        categoryList.push({id, ...categories[id]});
      }
      setCategoryList(categoryList);
    });
  },[]);

  return (
    <HomePageContainer>
      <button onClick={handleLogout}>Logout</button>
      <h1>Welcome!</h1>
      <input type="text" placeholder="New Category" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
      <button onClick={handleNewCategory}>Add Category</button>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CardsContainer>{categoryList.length !== 0 ? categoryList.map((categoryValue, index) => <Categories 
        key={index} categoryValue={categoryValue} deleteId={deleteId} userId={userId}
        />) : <h1>Create a new category!</h1>}</CardsContainer>
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
