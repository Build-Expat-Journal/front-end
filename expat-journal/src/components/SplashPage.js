import React from 'react';

import SignUp from './SignUp';
import Login from './Login';
import { MapPic } from './Styled.js';

const SplashPage = () => {
  return (
    <>
      <MapPic>
        <Login />
        <SignUp />
      </MapPic>

    </>
  );

}

export default SplashPage;