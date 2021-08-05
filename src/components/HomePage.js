import React, { useEffect, useState } from 'react';
import fire from '../fire';

const HomePage = ({ handleLogout }) => {
  const [newCategory, setNewCategory] = useState('');
  const [categoryList, setCategoryList] = useState([]);


  const handleNewCategory = () => {
  const categoriesRef = fire.database().ref('Categories');

    const newCat = {
      newCategory,
      complete: false,
    };
    categoriesRef.push(newCat);
  }

  useEffect(() => {
  const categoriesRef = fire.database().ref('Categories');
    console.log('HIT');
    categoriesRef.on('value', (snapshot) => {
      const category = snapshot.val();
      for (let id in category){
        categoryList.push(category[id]);
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
    </>
  )
};

export default HomePage;
