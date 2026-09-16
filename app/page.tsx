'use client';

import { Button, Card, Text, Title } from '@mantine/core';
import styles from './page.module.css';

interface Movie {
  id: number;
  title: string;
  genre: string;
  duration: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: 'Avengers',
    genre: 'Action',
    duration: '2h 20m',
  },
  {
    id: 2,
    title: 'Interstellar',
    genre: 'Science Fiction',
    duration: '2h 49m',
  },
  {
    id: 3,
    title: 'The Batman',
    genre: 'Crime',
    duration: '2h 56m',
  },
  {
    id: 4,
    title: 'Toy Story',
    genre: 'Animation',
    duration: '1h 21m',
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title>Movie Booking</Title>

        <div className={styles.buttons}>
          <Button>My Bookings</Button>
          <Button>Login</Button>
          <Button>Sign Up</Button>
        </div>
      </div>

      <Title order={2} className={styles.moviesTitle}>
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
              <Title order={3}>{movie.title}</Title>

              <Text>{movie.genre}</Text>

              <Text>{movie.duration}</Text>

              <Button mt="15">
                Book Movie
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}