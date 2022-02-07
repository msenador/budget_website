import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fire } from "../fire";
import Categories from "./Categories";
import Modal from "react-modal";
import { Button } from "../globalStyles";
import { useMediaQuery } from "react-responsive";
import AboutUs from "./About/AboutUs";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const CardsContainer = styled.div`
  // display: grid;
  // grid-template-columns: 3fr 3fr;
  // grid-gap: 25px 40px;
  // padding: 10px;
`;

const HomePageContainer = styled.div`
  // min-width: 570px;
  // position: absolute;
  // top: 0;
  // bottom: 0;
  // left: 0;
  // right: 0;
  // background-color: #20bf55;
  // background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
  // overflow-y: auto;
`;

const ConfirmLogout = styled.button`
  // cursor: pointer;
  // height: 45px;
  // background-color: #FFC43D;
  // border: transparent;
  // width: 90px;
  // border-radius: 20px;
`;

const CancelLogout = styled.button`
  // background-color: #DCE0D9;
  // border: transparent;
  // width: 90px;
  // borderRadius: 20px;
  // cursor: pointer;
  // height: 45px;
  // border-radius: 20px;
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    border: "none",
    padding: "100px",
  },
};

const customStylesDesktop = {
  content: {
    background: "aliceblue",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    border: "none",
    padding: "40px",
  },
};

const AddCategoryPosition = styled.div`
  // display: flex;
  // justify-content: center;
  // flex-direction: column;
  // width: 150px;
  // margin: auto;
  // gap: 10px;
  // padding: 40px 0px;
`;

const LogoutButtonStyles = styled.button`
  // margin-left: 20px;
  // margin-top: 20px;
  // background-color: #FFC43D;
  // border: none;
  // border-radius: 5px;
  // cursor: pointer;
  // height: 30px;
  // width: 150px;
`;

const HomePage = ({ handleLogout, userId, firstName, setFirstName }) => {
  let database = fire.database();

  const [newCategory, setNewCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [deleteId, setDeleteId] = useState("");
  const [logoutModalIsOpen, setLogoutModalIsOpen] = useState(false);
  const [editNameModalIsOpen, setEditNameModalIsOpen] = useState(false);
  const [emptyCategory, setEmptyCategory] = useState(false);
  const [editName, setEditName] = useState("");

  const handleNewCategory = () => {
    if (newCategory === "") {
      setEmptyCategory(true);
    } else {
      const categoriesRef = database.ref(`${userId}/Categories`);
      const newCat = {
        newCategory,
      };
      const newPush = categoriesRef.push(newCat);
      const newId = newPush.key;
      setDeleteId(newId);
      setNewCategory("");
    }
  };

  useEffect(() => {
    const categoriesRef = database.ref(`${userId}/Categories`);
    categoriesRef.on("value", (snapshot) => {
      const categories = snapshot.val();
      const categoryList = [];
      for (const id in categories) {
        categoryList.push({ id, ...categories[id] });
      }
      setCategoryList(categoryList.reverse());
    });
    if (firstName !== "") {
      postFirstName();
    }
  }, []);

  useEffect(() => {
    const nameRef = database.ref(`${userId}/name`);
    nameRef.on("value", (snapshot) => {
      const name = snapshot.val();
      console.log(name.name);
      setFirstName(name.name);
      // for (const id in categories) {
      //   categoryList.push({ id, ...categories[id] });
      // }
      // setCategoryList(categoryList.reverse());
    });
    if (firstName !== "") {
      postFirstName();
    }
  }, []);

  const openModalLogout = () => {
    setLogoutModalIsOpen(true);
  };

  const closeModalLogout = () => {
    setLogoutModalIsOpen(false);
  };

  const openEditNameModal = () => {
    setEditNameModalIsOpen(true);
  };

  const closeEditNameModal = () => {
    setEditNameModalIsOpen(false);
  };

  const handleAddCategoryEnterKey = (e) => {
    if (e.key === "Enter") {
      handleNewCategory();
    }
  };

  const postFirstName = () => {
    fire.database().ref(`${userId}/name`).set({
      name: firstName,
    });
  };

  const saveEditName = () => {
    fire.database().ref(`${userId}/name`).set({
      name: editName,
    });
    closeEditNameModal();
  };

  return (
    <>
      <HomePageContainer>
        {firstName && (
          <>
            <div>Welcome {firstName}!</div>
            <Icon
              icon="eva:edit-2-fill"
              onClick={openEditNameModal}
              style={{ cursor: "pointer" }}
            />
          </>
        )}
        <LogoutButtonStyles onClick={openModalLogout}>
          Logout
        </LogoutButtonStyles>
        <AddCategoryPosition>
          <input
            type="text"
            placeholder="New Category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            onKeyDown={handleAddCategoryEnterKey}
          />
          {emptyCategory ? <div>*Please enter a new category</div> : <></>}
          <button onClick={handleNewCategory}>Add Category</button>
        </AddCategoryPosition>
        <div>
          <CardsContainer>
            {categoryList.length !== 0 ? (
              categoryList.map((categoryValue, index) => (
                <Categories
                  key={index}
                  categoryValue={categoryValue}
                  deleteId={deleteId}
                  userId={userId}
                />
              ))
            ) : (
              <h1>Create a new category!</h1>
            )}
          </CardsContainer>
        </div>
        <Modal
          isOpen={logoutModalIsOpen}
          onRequestClose={closeModalLogout}
          style={customStyles}
          ariaHideApp={false}
        >
          <div>Are you sure you want to logout?</div>
          <div>
            <ConfirmLogout onClick={handleLogout}>YES</ConfirmLogout>
            <CancelLogout onClick={closeModalLogout}>NO</CancelLogout>
          </div>
        </Modal>
        <div />
      </HomePageContainer>
      <Modal
        isOpen={editNameModalIsOpen}
        onRequestClose={closeEditNameModal}
        style={customStylesDesktop}
        contentLabel="Example Modal"
      >
        <div style={{ textAlign: "center" }}>
          <h1>Edit name</h1>
          <input
            placeholder="Edit name"
            onChange={(e) => setEditName(e.target.value)}
          />
        </div>
        <button onClick={saveEditName}>SAVE</button>
      </Modal>
    </>
  );
};

export default HomePage;
