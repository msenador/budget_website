import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import fire from '../fire';
import Categories from './Categories';
import Modal from 'react-modal';

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr;
  grid-gap: 25px 40px;
  padding: 10px;
`;

const HomePageContainer = styled.div`
  min-width: 570px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #20bf55;
  background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
  overflow-y: auto;
`;

const ConfirmLogout = styled.button`
    cursor: pointer;
    height: 45px;
    background-color: #FFC43D;
    border: transparent;
    width: 90px;
    border-radius: 20px;
`;

const CancelLogout = styled.button`
  border: transparent; 
  width: 90px;
  borderRadius: 20px;
  cursor: pointer;
  height: 45px;
  border-radius: 20px;
  // border: 3px solid gray;
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
    border: 'none',
    padding: '100px'
  },
};

const AddCategoryPosition = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 150px;
  margin: auto;
  gap: 10px;
  padding: 40px 0px;
`;

const LogoutButtonStyles = styled.button`
margin-left: 20px; 
margin-top: 20px; 
background-color: #FFC43D;
border: none; 
border-radius: 5px; 
cursor: pointer;
height: 30px;
width: 150px;
`;

const HomePage = ({ handleLogout, userId }) => {
  const [newCategory, setNewCategory] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  const [deleteId, setDeleteId] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleNewCategory = () => {
    if (newCategory === ''){
      alert('*Please enter a new category*')
    } else {
      const categoriesRef = fire.database().ref(`${userId}/categories`);
      const newCat = {
        newCategory,
      };
      const newPush = categoriesRef.push(newCat);
      const newId = newPush.key;
      setDeleteId(newId);
      setNewCategory('');
      location.reload();
    }
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

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const handleAddCategoryEnterKey = (e) => {
    if (e.key === 'Enter'){
      handleNewCategory();
    }
  }

  return (
    <HomePageContainer>
      <LogoutButtonStyles onClick={openModal}>Logout</LogoutButtonStyles>
      <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
      <h1 style={{ textAlign: 'center', color: '#FFC43D', fontSize: '50px' }}>BUDGETSTASH</h1>
      <AddCategoryPosition>
      <input 
        type="text" 
        placeholder="New Category" 
        value={newCategory} 
        onChange={(e) => setNewCategory(e.target.value)} 
        onKeyDown={handleAddCategoryEnterKey}
        style={{ borderRadius: '5px', border: 'none', height: '30px' }}
      />
      <button 
      onClick={handleNewCategory}
      style={{ borderRadius: '5px', border: 'none', height: '30px', backgroundColor: '#FFC43D', cursor: 'pointer' }}
      >
        Add Category
      </button>
      </AddCategoryPosition>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CardsContainer>{categoryList.length !== 0 ? categoryList.map((categoryValue, index) => <Categories 
        key={index} categoryValue={categoryValue} deleteId={deleteId} userId={userId}
        />) : <h1 style={{ position: 'absolute', marginLeft: '-122px' }} >Create a new category!</h1>}</CardsContainer>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        >
          <div style={{ marginBottom: '25px', fontSize: '20px' }}>Are you sure you want to logout?</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <ConfirmLogout onClick={handleLogout}>YES</ConfirmLogout>
          <CancelLogout onClick={closeModal}>NO</CancelLogout>
          </div>
      </Modal>
      <div style={{ paddingBottom: '50px' }}/>
    </HomePageContainer>
  );
};

export default HomePage;
