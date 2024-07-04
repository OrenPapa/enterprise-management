import React, { type ChangeEvent, useState } from 'react';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {
  FormContainer,
  Title,
  StyledTextField,
  StyledButton,
  SocialButtonContainer,
  SocialButton,
  StyledDivider,
  ForgotPasswordLink,
  SignUpText,
  Icon,
} from './styles';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { InputAdornment, IconButton } from '@mui/material';
import { handleResponseMessage } from '../../../helper';
import type { FirebaseError } from 'firebase/app';
import ErrorMessage from '../../../components/errorMessage';

interface Credentials {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: '',
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponseMessage('');
    try {
      await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password,
      );
      navigate('/');
    } catch (error) {
      const firebaseError = error as FirebaseError;
      if (firebaseError.code) {
        const errorMessage = handleResponseMessage(firebaseError.code);
        setResponseMessage(errorMessage);
      } else {
        console.error('Unexpected error:', error);
        setResponseMessage('Something went wrong!');
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <FormContainer component="form" onSubmit={handleSignIn}>
      <Title>Sign in</Title>
      <StyledTextField
        size="small"
        label="Email"
        name="email"
        value={credentials.email}
        onChange={handleChange}
        fullWidth
        autoComplete="off"
      />
      <StyledTextField
        size="small"
        label="Password"
        name="password"
        type={showPassword ? 'text' : 'password'}
        value={credentials.password}
        onChange={handleChange}
        fullWidth
        autoComplete="new-password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility} edge="end">
                <Icon icon={showPassword ? faEyeSlash : faEye} size="xs" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <ForgotPasswordLink to={'/'}>Forgot Password?</ForgotPasswordLink>
      <ErrorMessage message={responseMessage} icon={false} />
      <StyledButton type="submit" variant="contained" color="primary">
        Sign in
      </StyledButton>
      <StyledDivider>or</StyledDivider>
      <SocialButtonContainer>
        <SocialButton $platform="google" variant="outlined">
          Google
        </SocialButton>
        <SocialButton $platform="facebook" variant="outlined">
          Facebook
        </SocialButton>
      </SocialButtonContainer>
      <SignUpText>
        Don&apos;t have an account yet? <a href="/sign-up">Sign up</a>
      </SignUpText>
    </FormContainer>
  );
};

export default SignInForm;
