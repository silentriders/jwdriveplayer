import React, { useContext, useState, useEffect } from 'react';
import HomeComponent from './Home.component';
import { LayoutAdmin } from '../../../Components';
import UserContext from '../../../Context/UserContext';

const HomeContainer = (props) => {
  const { userCookies, setUserCookies, deleteUserCookies } = useContext(UserContext)
  const [isShowVerifMessage, setIsShowVerifMessage] = useState(false)
  const user = JSON.parse(userCookies)

  useEffect(() => {
    const initSetup = () => {
      if(user !== null) {
        if(!user.user.verified){
          setIsShowVerifMessage(true)
        }
      }
    }
    initSetup()
  }, [])

  return (
    <LayoutAdmin history={props.history}>
      <HomeComponent
        isShowVerifMessage={isShowVerifMessage}
      />
    </LayoutAdmin>
  );
};

export default HomeContainer;
