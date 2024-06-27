import { type ChangeEvent, useState } from 'react';
import { auth, db } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

interface Credentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const nagivate = useNavigate();
  const [credentials, setCredentials] = useState<Credentials>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
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
      nagivate('/');
    } catch (error) {
      console.error('Error registering:', error);
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
    <form onSubmit={handleRegister}>
      Sign up:
      <input
        type="text"
        placeholder="First name"
        name="firstName"
        value={credentials.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last name"
        name="lastName"
        value={credentials.lastName}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={credentials.email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
      />
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignUp;
