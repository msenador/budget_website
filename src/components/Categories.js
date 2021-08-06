import React from 'react';
import styled from 'styled-components';

const CategoryCards = styled.div`
  background-color: aliceblue;
  text-align: center;
  padding: 50px;
  border-radius: 20px;
  width: 150px;
`;

function Categories({ val }) {
    return(
        <CategoryCards>{val.newCategory}</CategoryCards>
    )
}

export default Categories;