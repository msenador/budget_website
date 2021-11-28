import React, { useEffect, useState } from "react";
import styled from "styled-components";
import fire from "../fire";
import Categories from "./Categories";
import Modal from "react-modal";
import { Button } from "../globalStyles";
import { useMediaQuery } from "react-responsive";
import AboutUs from "./About/AboutUs";

const HomeVideo = styled.video`
  object-fit: cover;
  width: 100%;
  position: sticky;
  z-index: -1;
  &.desktop {
    height: 600px;
  }

  &.tablet {
    height: 500px;
  }

  &.phone {
    height: 300px;
  }
`;

const SignupButton = styled(Button)`
  height: 200px;
  width: 200px;
  border-radius: 100px;
  &.desktop {
    margin-left: 60px;
  }

  &.tablet {
  }

  &.phone {
    position: absolute;
    margin-top: -58px;
    font-size: 10px;
    margin-left: 22px;
    height: 80px;
    width: 105px;
    border-radius: 100px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 50%;
  bottom: 0;
  position: absolute;
  display: flex;
  justify-content: space-around;
  margin-bottom: 80px;
`;

const Slogan = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 40px;
  font-size: 35px;
  font-weight: bold;
  margin-top: -80px;
  &.tablet {
  }
  &.phone {
    font-size: 15px;
    margin-top: -95px;
  }
`;

const AboutUsContainer = styled.div`
  &.desktop {
    height: 700px;
  }
  &.tablet {
    height: 1100px;
  }
  &.phone {
    height: 1550px;
  }
`;

const FooterContainer = styled.div`
  // height: 150px;
  // background-color: #087e8b;
  padding-bottom: 20px;
`;

const HomePage = () => {
  const mobilePhone = useMediaQuery({ query: "(max-width: 540px)" });
  const mobileTablet = useMediaQuery({
    query: "(min-width: 541px)",
  });
  const laptopOrDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });

  return (
    <>
      <HomeVideo
        className={
          laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
        }
        data-testid="main-video"
        loop
        src="./lightBulbHand.mp4"
        autoPlay
        muted
      />
      <Container>
        <Slogan
          data-testid="slogan"
          className={
            laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
          }
        >
          <div>Be confident.</div>
          <div>Be free.</div>
          <div>Be ready.</div>
        </Slogan>
        <SignupButton
          className={
            laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
          }
        >
          Register Now!
        </SignupButton>
      </Container>
      <AboutUsContainer
        className={
          laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
        }
      >
        <AboutUs />
      </AboutUsContainer>
      <FooterContainer />
    </>
  );
  // return (
  //   <>
  //     <Container>
  //       hello
  //     </Container>
  //   </>
  // );
};

export default HomePage;

// const CardsContainer = styled.div`
//   display: grid;
//   grid-template-columns: 3fr 3fr;
//   grid-gap: 25px 40px;
//   padding: 10px;
// `;

// const HomePageContainer = styled.div`
//   min-width: 570px;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background-color: #20bf55;
//   background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
//   overflow-y: auto;
// `;

// const ConfirmLogout = styled.button`
//     cursor: pointer;
//     height: 45px;
//     background-color: #FFC43D;
//     border: transparent;
//     width: 90px;
//     border-radius: 20px;
// `;

// const CancelLogout = styled.button`
//   background-color: #DCE0D9;
//   border: transparent;
//   width: 90px;
//   borderRadius: 20px;
//   cursor: pointer;
//   height: 45px;
//   border-radius: 20px;
// `;

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     borderRadius: '20px',
//     border: 'none',
//     padding: '100px'
//   },
// };

// const AddCategoryPosition = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   width: 150px;
//   margin: auto;
//   gap: 10px;
//   padding: 40px 0px;
// `;

// const LogoutButtonStyles = styled.button`
// margin-left: 20px;
// margin-top: 20px;
// background-color: #FFC43D;
// border: none;
// border-radius: 5px;
// cursor: pointer;
// height: 30px;
// width: 150px;
// `;

// const HomePage = ({ handleLogout, userId }) => {
//   const [newCategory, setNewCategory] = useState('');
//   const [categoryList, setCategoryList] = useState([]);
//   const [deleteId, setDeleteId] = useState('');
//   const [modalIsOpen, setIsOpen] = useState(false);
//   const [emptyCategory, setEmptyCategory] = useState(false);

//   const handleNewCategory = () => {
//     if (newCategory === ''){
//       setEmptyCategory(true);
//     } else {
//       const categoriesRef = fire.database().ref(`${userId}/categories`);
//       const newCat = {
//         newCategory,
//       };
//       const newPush = categoriesRef.push(newCat);
//       const newId = newPush.key;
//       setDeleteId(newId);
//       setNewCategory('');
//       location.reload();
//     }
//   };

//   useEffect(() => {
//     const categoriesRef = fire.database().ref(`${userId}/categories`);
//     categoriesRef.on('value', (snapshot) => {
//       const categories = snapshot.val();
//       const categoryList = [];
//       for (const id in categories) {
//         categoryList.push({id, ...categories[id]});
//       }
//       setCategoryList(categoryList);
//     });
//   },[]);

//   const openModal = () => {
//     setIsOpen(true);
//   }

//   const closeModal = () => {
//     setIsOpen(false);
//   }

//   const handleAddCategoryEnterKey = (e) => {
//     if (e.key === 'Enter'){
//       handleNewCategory();
//     }
//   }

//   return (
//     <HomePageContainer>
//       <LogoutButtonStyles onClick={openModal}>Logout</LogoutButtonStyles>
//       <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
//       <h1 style={{ textAlign: 'center', color: '#FFC43D', fontSize: '50px' }}>BUDGETSTASH</h1>
//       <AddCategoryPosition>
//       <input
//         type="text"
//         placeholder="New Category"
//         value={newCategory}
//         onChange={(e) => setNewCategory(e.target.value)}
//         onKeyDown={handleAddCategoryEnterKey}
//         style={{ borderRadius: '5px', border: 'none', height: '30px' }}
//       />
//       { emptyCategory ? (<div style={{ color: 'black', fontSize: '10px', marginTop: '-11px' }}>*Please enter a new category</div>) : (<></>)}
//       <button
//       onClick={handleNewCategory}
//       style={{ borderRadius: '5px', border: 'none', height: '30px', backgroundColor: '#FFC43D', cursor: 'pointer' }}
//       >
//         Add Category
//       </button>
//       </AddCategoryPosition>
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <CardsContainer>{categoryList.length !== 0 ? categoryList.map((categoryValue, index) => <Categories
//         key={index} categoryValue={categoryValue} deleteId={deleteId} userId={userId}
//         />) : <h1 style={{ position: 'absolute', marginLeft: '-122px' }} >Create a new category!</h1>}</CardsContainer>
//       </div>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         style={customStyles}
//         ariaHideApp={false}
//         >
//           <div style={{ marginBottom: '25px', fontSize: '20px' }}>Are you sure you want to logout?</div>
//           <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
//           <ConfirmLogout onClick={handleLogout}>YES</ConfirmLogout>
//           <CancelLogout onClick={closeModal}>NO</CancelLogout>
//           </div>
//       </Modal>
//       <div style={{ paddingBottom: '50px' }}/>
//     </HomePageContainer>
//   );
// };

// export default HomePage;
