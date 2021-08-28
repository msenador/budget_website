import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import fire from '../fire';
import Categories from './Categories';
import Modal from 'react-modal';
import { MicNone } from '@material-ui/icons';

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

const ConfirmLogout = styled.button`
    cursor: pointer;
    height: 45px;
    background-color: #20bf55;
    background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
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
  border: 3px solid gray;
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

const HomePage = ({ handleLogout, userId }) => {
  const [newCategory, setNewCategory] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  const [deleteId, setDeleteId] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

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

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <HomePageContainer>
      <button onClick={openModal}>Logout</button>
      <h1 style={{ textAlign: 'center' }}>Welcome!</h1>
      <AddCategoryPosition>
      <input 
        type="text" 
        placeholder="New Category" 
        value={newCategory} 
        onChange={(e) => setNewCategory(e.target.value)} 
        style={{ borderRadius: '5px', border: 'none', height: '30px' }}
      />
      <button 
      onClick={handleNewCategory}
      style={{ borderRadius: '5px', border: 'none', height: '30px', backgroundColor: '#FFC43D' }}
      >
        Add Category
      </button>
      </AddCategoryPosition>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CardsContainer>{categoryList.length !== 0 ? categoryList.map((categoryValue, index) => <Categories 
        key={index} categoryValue={categoryValue} deleteId={deleteId} userId={userId}
        />) : <h1>Create a new category!</h1>}</CardsContainer>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
        >
          <div>Are you sure you want to logout?</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <ConfirmLogout onClick={handleLogout}>YES</ConfirmLogout>
          <CancelLogout onClick={closeModal}>NO</CancelLogout>
          </div>
      </Modal>
    </HomePageContainer>
  );
};

export default HomePage;
