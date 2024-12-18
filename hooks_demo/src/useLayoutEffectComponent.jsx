// UseLayoutEffectComponent.js

import React, { useState, useLayoutEffect } from 'react';
import database from './Database';

function UseLayoutEffectComponent() {
  const [users, setUsers] = useState(database.users);

  useLayoutEffect(() => {
    console.log('useLayoutEffect: La mise en page a été ajustée');
  }, [users]);

  const addUser = () => {
    const newUser = { id: users.length + 1, name: 'New User', email: '', age: 0 };
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h3>useLayoutEffect: Ajustement de la mise en page</h3>
      <button onClick={addUser}>Ajouter un utilisateur</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseLayoutEffectComponent;
