// UseStateComponent.js

import React, { useState } from 'react';
import database from './Database';

function UseStateComponent() {
  const [users, setUsers] = useState(database.users);
  const [newUserName, setNewUserName] = useState('');

  const addUser = () => {
    const newUser = { id: users.length + 1, name: newUserName, email: '', age: 0 };
    setUsers([...users, newUser]);
    setNewUserName('');
  };

  return (
    <div>
      <h3>useState: Ajouter un utilisateur</h3>
      <input 
        type="text" 
        value={newUserName} 
        onChange={(e) => setNewUserName(e.target.value)} 
        placeholder="Nom de l'utilisateur"
      />
      <button onClick={addUser}>Ajouter</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseStateComponent;
