// UseTransitionComponent.js

import React, { useState, useTransition } from 'react';
import database from './Database';

function UseTransitionComponent() {
  const [users, setUsers] = useState(database.users);
  const [isPending, startTransition] = useTransition();

  const addUser = () => {
    startTransition(() => {
      const newUser = { id: users.length + 1, name: 'New User', email: '', age: 0 };
      setUsers([...users, newUser]);
    });
  };

  return (
    <div>
      <h3>useTransition: Ajout différé d'un utilisateur</h3>
      {isPending ? <p>Chargement...</p> : null}
      <button onClick={addUser}>Ajouter un utilisateur</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseTransitionComponent;
