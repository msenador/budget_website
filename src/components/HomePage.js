import React, { useEffect, useState } from 'react';
import fire from '../fire';
import Categories from './Categories';

const HomePage = ({ handleLogout }) => {
  const [newCategory, setNewCategory] = useState('');
  const [categoryList, setCategoryList] = useState([]);


  const handleNewCategory = () => {
  const categoriesRef = fire.database().ref('Categories');

    const newCat = {
      newCategory,
    };
    categoriesRef.push(newCat);
  }

  useEffect(() => {
  const categoriesRef = fire.database().ref('Categories');
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
    <>
    <button onClick={handleLogout}>Logout</button>
    <h1>Welcome!</h1>
    <input type="text" placeholder="New Category" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}/>
    <button onClick={handleNewCategory}>Add Category</button>
    <h1>CATEGORIES</h1>
    {/* <div>{categoryList ? categoryList.map((val, index) => <Categories val={val} key={index} />) : 'nothing'}</div> */}
    {categoryList.length !== 0 ? categoryList.map(val => <div>{val.newCategory}</div>) : <h1>Add a budget category!</h1>}
    </>
  )
};

export default HomePage;
