'use client';

import {
  Button,
  Container,
  PasswordInput,
  Stack,
  Text, TextInput, Title,
} from '@mantine/core';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const router = useRouter();

  function login() {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (username === savedUsername && password === savedPassword) {
      localStorage.setItem('isLoggedIn', 'true');

      setMessage('Login successful');

      router.push('/');
    } else {
      setMessage('Wrong username or password');
    }
  }

  return (
    <Container size="sm" py="30">
      <Title>Login</Title>

      <Stack mt="20">
        <TextInput
          label="Username"
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
        />

        <PasswordInput
          label="Password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
        />

        <Button onClick={login}>
          Login
        </Button>

        <Button
          variant="outline"
          component={Link}
          href="/"
        >
          Back Home
        </Button>

        <Text>{message}</Text>
      </Stack>
    </Container>
  );
}