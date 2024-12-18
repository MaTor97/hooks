// UseCallbackComponent.js

import React, { useState, useCallback } from 'react';
import database from './Database';

function UseCallbackComponent() {
  const [users, setUsers] = useState(database.users);

  // Utilisation de useCallback pour mémoriser la fonction de suppression
  const removeUser = useCallback((id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  }, [users]);  // La fonction dépend de 'users', donc elle est recréée uniquement lorsque 'users' change

  return (
    <div>
      <h3>useCallback: Supprimer un utilisateur</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} 
            <button onClick={() => removeUser(user.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseCallbackComponent;
