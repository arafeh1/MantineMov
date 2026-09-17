'use client';

import {Button, Container, PasswordInput, Stack, Text, TextInput, Title,} from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function signup() {
    if (username === '' || password === '') {
      setMessage('Please fill in all fields');
      return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    setMessage('Account created successfully');

    setUsername('');
    setPassword('');
  }

  return (
    <Container size="sm" py="30">
      <Title>Sign Up</Title>

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

        <Button onClick={signup}> Create Account </Button>
        <Button variant="outline" component={Link} href="/"> Back Home </Button>

        <Text>{message}</Text>
      </Stack>
    </Container>
  );
}