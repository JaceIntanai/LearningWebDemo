import { useEffect, useState } from 'react';
import api from '../utils/api';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.userID}</li>
        ))}
      </ul>
    </div>
  );
}
