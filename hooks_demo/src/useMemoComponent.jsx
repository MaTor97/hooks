// UseMemoComponent.js

import React, { useState, useMemo } from 'react';
import database from './Database';

function UseMemoComponent() {
  const [users, setUsers] = useState(database.users);
  const [search, setSearch] = useState('');

  const filteredUsers = useMemo(() => {
    return users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
  }, [search, users]);

  return (
    <div>
      <h3>useMemo: Recherche optimisée</h3>
      <input 
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="Recherchez un utilisateur"
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseMemoComponent;
