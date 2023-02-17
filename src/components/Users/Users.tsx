import { useState, useEffect, useCallback } from 'react';
import { Typography } from '@mui/material';
import { content } from '../../content';
import { AppRoutesApi } from '../../constants';

interface User {
  name: string;
}

export const Users = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const {
    Users: { title, errorText },
  } = content;

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch(AppRoutesApi.fetchUsers);
      const result: User[] = await response.json();
      const mappedUsers = result.map(({ name }) => name);
      setUsers(mappedUsers);
    } catch (error) {
      setError(errorText);
    }
  }, [errorText]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <Typography component="h1">{title}</Typography>

      {error && <Typography component="p">{error}</Typography>}

      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};
