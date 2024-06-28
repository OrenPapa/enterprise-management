import React from 'react';
import SignUpForm from './signupForm';
import {
  FullHeightContainer,
  LeftContainer,
  RightContainer,
  Image,
} from './styles';
import SignUpImage from '../../assets/images/signUpImage.jpg';

const SignUp: React.FC = () => {
  return (
    <FullHeightContainer>
      <LeftContainer>
        <Image src={SignUpImage} alt="Sign Up" />
      </LeftContainer>
      <RightContainer>
        <SignUpForm />
      </RightContainer>
    </FullHeightContainer>
  );
};

export default SignUp;
