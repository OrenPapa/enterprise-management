import styled from 'styled-components';
import { Box, TextField, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 380px;
  margin: 16px;
  padding: 32px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 4px;
  user-select: none;

  @media (max-width: 460px) {
    width: 360px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 16px;
`;

export const StyledDivider = styled(Divider)`
  position: relative;
  width: 100%;
`;

export const SocialButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

interface SocialButtonProps {
  $platform: 'google' | 'facebook';
}

export const SocialButton = styled(Button)<SocialButtonProps>`
  margin: 0 8px;
  height: 32px;
  width: calc(50% - 8px);
  color: ${({ $platform }) => ($platform === 'google' ? '#db4437' : '#4267B2')};

  &:hover {
    background-color: ${({ $platform }) =>
      $platform === 'google' ? '#c23321' : '#365899'};
  }

  &.MuiButton-outlined {
    color: ${({ $platform }) =>
      $platform === 'google' ? '#db4437' : '#4267B2'};
    border-color: ${({ $platform }) =>
      $platform === 'google' ? '#db4437' : '#4267B2'};
  }

  &.MuiButton-outlined:hover {
    background-color: ${({ $platform }) =>
      $platform === 'google' ? '#c23321' : '#365899'};
    border-color: ${({ $platform }) =>
      $platform === 'google' ? '#c23321' : '#365899'};
    color: white;
  }
`;

export const ForgotPasswordLink = styled(Link)`
  align-self: flex-end;
  margin-top: -12px;
  margin-bottom: 16px;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const SignUpText = styled.p`
  text-align: center;

  a {
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: none;
    }
  }
`;

export const Icon = styled(FontAwesomeIcon)``;
