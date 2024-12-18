// UseDeferredValueComponent.js

import React, { useState, useDeferredValue } from 'react';
import database from './Database';

function UseDeferredValueComponent() {
  const [search, setSearch] = useState('');
  const deferredSearch = useDeferredValue(search);
  const filteredUsers = database.users.filter(user =>
    user.name.toLowerCase().includes(deferredSearch.toLowerCase())
  );

  return (
    <div>
      <h3>useDeferredValue: Recherche différée</h3>
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

export default UseDeferredValueComponent;
