import { useState } from 'react';
import { auth, db } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import {
  FormContainer,
  Title,
  Subtitle,
  StyledTextField,
  StyledButton,
  SocialButtonContainer,
  SocialButton,
  StyledDivider,
  SignInText,
  Icon,
} from './styles';
import { IconButton, InputAdornment } from '@mui/material';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import type { FirebaseError } from 'firebase/app';
import { handleResponseMessage } from '../../../helper';
import ErrorMessage from '../../../components/errorMessage';

interface Credentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [credentials, setCredentials] = useState<Credentials>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPassword((prev) => !prev);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponseMessage('');
    if (credentials.password !== credentials.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password,
      );
      const user = userCredential.user;

      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        email: credentials.email,
        role: 'admin',
      });
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <FormContainer component="form" onSubmit={handleRegister}>
      <Title variant="h2">Welcome to the Enterprise Management Tool</Title>
      <Subtitle variant="h4">
        The only platform you need to manage your business efficiently
      </Subtitle>
      <StyledTextField
        size="small"
        label="First name"
        name="firstName"
        value={credentials.firstName}
        onChange={handleChange}
        fullWidth
      />
      <StyledTextField
        size="small"
        label="Last name"
        name="lastName"
        value={credentials.lastName}
        onChange={handleChange}
        fullWidth
      />
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
      <StyledTextField
        size="small"
        label="Confirm Password"
        name="confirmPassword"
        type={showConfirmPassword ? 'text' : 'password'}
        value={credentials.confirmPassword}
        onChange={handleChange}
        fullWidth
        autoComplete="new-password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={toggleConfirmPasswordVisibility} edge="end">
                <Icon
                  icon={showConfirmPassword ? faEyeSlash : faEye}
                  size="xs"
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <ErrorMessage message={responseMessage} icon={false} />
      <StyledButton type="submit" variant="contained" color="primary">
        Sign up
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
      <SignInText>
        Already have an account? <a href="/sign-up">Sign in</a>
      </SignInText>
    </FormContainer>
  );
};

export default SignUpForm;
