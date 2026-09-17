'use client';

import { Button, Card, Text, Title } from '@mantine/core';
import Link from 'next/link';
import styles from './page.module.css';
import { useEffect, useState } from 'react';

interface Movie {
  id: number;
  title: string;
  genre: string;
  duration: string;
  image: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: 'Avengers',
    genre: 'Action',
    duration: '2h 20m',
    image: '/avengers.jpg',
  },
  {
    id: 2,
    title: 'Interstellar',
    genre: 'Science Fiction',
    duration: '2h 49m',
    image: '/interstellar.jpg',
  },
  {
    id: 3,
    title: 'The Batman',
    genre: 'Crime',
    duration: '2h 56m',
    image: '/batman.jpg',
  },
  {
    id: 4,
    title: 'The Maze Runner',
    genre: 'Science Fiction',
    duration: '1h 21m',
    image: '/mazerunner.jpg',
  },
];

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(function() {
    const loggedIn = localStorage.getItem('isLoggedIn');

    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  function logout() {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title>Movie Booking</Title>

        <div className={styles.buttons}>
          <Button
            component={Link}
            href="/bookings"
          >
            My Bookings
          </Button>

          {isLoggedIn ? (
            <Button
              color="red"
              onClick={logout}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                component={Link}
                href="/login"
              >
                Login
              </Button>

              <Button
                component={Link}
                href="/signup"
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>

      <Title
        order={2}
        className={styles.moviesTitle}
      >
        Available Movies
      </Title>

      <div className={styles.movies}>
        {movies.map(function(movie) {
          return (
            <Card
              key={movie.id}
              shadow="sm"
              padding="lg"
              withBorder
              className={styles.movieCard}
            >
              <img
                src={movie.image}
                alt={movie.title}
              />

              <Title order={3}>
                {movie.title}
              </Title>

              <Text>{movie.genre}</Text>

              <Text>{movie.duration}</Text>

              <Button
                mt="15"
                component={Link}
                href={`/booking?id=${movie.id}`}
              >
                Book Movie
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}