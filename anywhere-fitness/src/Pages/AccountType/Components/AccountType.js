import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../../../ReusableComponents/Header';
import Client from '../../../ReusableComponents/Client';
import Instructor from '../../../ReusableComponents/Instructor';

const MainContent = styled.div`
  display: flex;
  justify-content: space-evenly;

  a {
    text-decoration: none;
  }
`;

export default function AccountType() {
  return (
    <div>
      <Header />

      <MainContent>
        <Link to='/accountType/client'>
          <Client />
        </Link>

        <Link to='/accountType/instructor'>
          <Instructor />
        </Link>
      </MainContent>
    </div>
  );
}
