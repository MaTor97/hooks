// UseEffectComponent.js

import React, { useState, useEffect } from 'react';
import database from './Database';

function UseEffectComponent() {
  const [users, setUsers] = useState(database.users);
  const [userId, setUserId] = useState('');
  const [newName, setNewName] = useState('');

  useEffect(() => {
    // Afficher un message à chaque fois que la liste des utilisateurs change
    console.log('La liste des utilisateurs a été mise à jour:', users);
  }, [users]);  // La dépendance est users, donc cet effet se déclenche à chaque modification de la liste des utilisateurs

  const updateUserName = () => {
    const id = parseInt(userId);
    if (isNaN(id)) {
      alert('ID invalide');
      return;
    }

    const updatedUsers = users.map(user => 
      user.id === id ? { ...user, name: newName } : user
    );
    setUsers(updatedUsers);
    setUserId('');
    setNewName('');
  };

  return (
    <div>
      <h3>useEffect: Modifier un utilisateur</h3>
      <div>
        <label>
          ID de l'utilisateur à modifier:
          <input
            type="number"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Entrez l'ID"
          />
        </label>
      </div>
      <div>
        <label>
          Nouveau prénom:
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Entrez le nouveau prénom"
          />
        </label>
      </div>
      <button onClick={updateUserName}>Mettre à jour l'utilisateur</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseEffectComponent;
