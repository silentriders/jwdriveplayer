import React, { useContext } from 'react';
import HomeComponent from './Home.component';
import { LayoutAdmin } from '../../../Components';
import UserContext from '../../../Context/UserContext';

const HomeContainer = (props) => {
  const { userCookies, setUserCookies, deleteUserCookies } = useContext(UserContext)

  return (
    <LayoutAdmin history={props.history}>
      <HomeComponent />
    </LayoutAdmin>
  );
};

export default HomeContainer;
