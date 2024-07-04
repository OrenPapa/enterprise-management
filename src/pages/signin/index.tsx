import React from 'react';
import {
  FullHeightContainer,
  LeftContainer,
  RightContainer,
  Image,
} from './styles';
import SignInImage from '../../assets/images/singInImage.jpg';
import SignInForm from './signinForm';

const SignUp: React.FC = () => {
  return (
    <FullHeightContainer>
      <LeftContainer>
        <SignInForm />
      </LeftContainer>
      <RightContainer>
        <Image src={SignInImage} alt="Sign Up" />
      </RightContainer>
    </FullHeightContainer>
  );
};

export default SignUp;
