import React, { useState, useTransition } from 'react';
import database from './Database';

function UseTransitionComponent() {
  const [users, setUsers] = useState(database.users);
  const [isPending, startTransition] = useTransition();
  const [newUserName, setNewUserName] = useState('');

  const addUser = () => {
    if (newUserName.trim()) {
      startTransition(() => {
        const newUser = {
          id: users.length + 1,
          name: newUserName.trim(),
          email: '',
          age: 0,
        };
        setUsers([...users, newUser]);
        setNewUserName(''); // Réinitialise le champ d'entrée après ajout
      });
    } else {
      alert("Le nom d'utilisateur ne peut pas être vide.");
    }
  };

  const handleInputChange = (e) => {
    setNewUserName(e.target.value);
  };

  return (
    <div>
      <h3>useTransition: Ajout différé d'un utilisateur</h3>
      <input
        type="text"
        value={newUserName}
        onChange={handleInputChange}
        placeholder="Saisissez un nom"
      />
      <button onClick={addUser} disabled={isPending}>
        {isPending ? 'Ajout en cours...' : 'Ajouter un utilisateur'}
      </button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseTransitionComponent;
