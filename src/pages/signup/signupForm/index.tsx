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
} from './styles';

interface Credentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<Credentials>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
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

      // Store user info in Firestore with role 'admin'
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        email: credentials.email,
        role: 'admin', // setting the role as admin
      });
      navigate('/');
    } catch (error) {
      console.error('Error registering:', error);
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
      <Title>Welcome to the Enterprise Management Tool</Title>
      <Subtitle>
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
        type="password"
        value={credentials.password}
        onChange={handleChange}
        fullWidth
        autoComplete="new-password"
      />
      <StyledTextField
        size="small"
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        value={credentials.confirmPassword}
        onChange={handleChange}
        fullWidth
        autoComplete="new-password"
      />
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
    </FormContainer>
  );
};

export default SignUpForm;
