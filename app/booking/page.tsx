'use client';

import Link from 'next/link';
import {
  Button,
  Container,
  Select,
  Stack,
  Text,
  Title,
} from '@mantine/core';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const movies = [
  { id: 1, title: 'Avengers' },
  { id: 2, title: 'Interstellar' },
  { id: 3, title: 'The Batman' },
  { id: 4, title: 'The Maze Runner' },
];

export default function Booking() {
  const router = useRouter();

  useEffect(function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn !== 'true') {
      router.push('/login');
    }
  }, []);

  const searchParams = useSearchParams();
  const movieId = searchParams.get('id');

  const movie = movies.find(function(movie) {
    return movie.id === Number(movieId);
  });

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [seats, setSeats] = useState('1');
  const [message, setMessage] = useState('');

  function bookMovie() {
    if (date === '' || time === '') {
      setMessage('Please complete all fields');
      return;
    }

    const bookings = JSON.parse(
      localStorage.getItem('bookings') || '[]'
    );

    bookings.push({
      movieTitle: movie?.title,
      date: date,
      time: time,
      seats: seats,
    });

    localStorage.setItem('bookings', JSON.stringify(bookings));

    setMessage('Booking successful');
  }

  return (
    <Container size="sm" py="30">
      <Title>Book Movie</Title>

      <Text mt="20">
        Movie: {movie?.title}
      </Text>

      <Stack mt="20">
        <Text>Choose your booking details:</Text>

        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />

        <Select
          label="Time"
          data={['18:00', '20:00', '22:00']}
          value={time}
          onChange={(value) => setTime(value || '')}
          styles={{
            input: {
              backgroundColor: '#1f2937',
              color: 'white',
            },
            dropdown: {
              backgroundColor: '#1f2937',
            },
            option: {
              color: 'white',
            },
          }}
        />

        <Select
          label="Seats"
          data={['1', '2', '3', '4', '5']}
          value={seats}
          onChange={(value) => setSeats(value || '1')}
          styles={{
            input: {
              backgroundColor: '#1f2937',
              color: 'white',
            },
            dropdown: {
              backgroundColor: '#1f2937',
            },
            option: {
              color: 'white',
            },
          }}
        />

        <Button onClick={bookMovie}>
          Confirm Booking
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