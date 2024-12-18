import React, { useState, useLayoutEffect } from 'react';
import database from './Database';

function UseLayoutEffectComponent() {
  const [users, setUsers] = useState(database.users);
  const [newUserName, setNewUserName] = useState('');

  useLayoutEffect(() => {
    console.log('useLayoutEffect: La mise en page a été ajustée');
  }, [users]);

  const handleInputChange = (e) => {
    setNewUserName(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && newUserName.trim()) {
      const newUser = {
        id: users.length + 1,
        name: newUserName.trim(),
        email: '',
        age: 0,
      };
      setUsers([...users, newUser]);
      setNewUserName(''); // Réinitialise l'input après ajout
    }
  };

  return (
    <div>
      <h3>useLayoutEffect: Ajustement de la mise en page</h3>
      <input
        type="text"
        value={newUserName}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Saisissez un nom et appuyez sur Entrée"
      />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseLayoutEffectComponent;
