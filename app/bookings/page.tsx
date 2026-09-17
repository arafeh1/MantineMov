'use client';

import { Button, Card, Container, Stack, Text, Title,} from '@mantine/core';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Booking {
  movieTitle: string;
  date: string;
  time: string;
  seats: string;
}

export default function Bookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(function() {
    const savedBookings = localStorage.getItem('bookings');

    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []);

  return (
    <Container py="30">
      <Title>My Bookings</Title>

      <Stack mt="20">
        {bookings.length === 0 && (
          <Text>You do not have any bookings yet.</Text>
        )}

        {bookings.map(function(booking, index) {
          return (
            <Card key={index} withBorder shadow="sm">
              <Title order={3}>
                {booking.movieTitle}
              </Title>

              <Text>Date: {booking.date}</Text>
              <Text>Time: {booking.time}</Text>
              <Text>Seats: {booking.seats}</Text>
            </Card>
          );
        })}

        <Button variant="outline" component={Link} href="/"> Back Home </Button>
      </Stack>
    </Container>
  );
}