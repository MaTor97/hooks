// UseRefComponent.js

import React, { useState, useRef } from 'react';
import database from './Database';

function UseRefComponent() {
  const [users, setUsers] = useState(database.users);
  const nameInputRef = useRef();

  const focusInput = () => {
    nameInputRef.current.focus();  // Donne le focus au champ
    nameInputRef.current.select(); // Sélectionne le texte dans le champ
  };

  return (
    <div>
      <h3>useRef: Focus et sélection d'un champ de texte</h3>
      <input
        ref={nameInputRef}
        type="text"
        placeholder="Cliquez sur le bouton pour se concentrer et sélectionner"
        style={{
          border: nameInputRef.current && document.activeElement === nameInputRef.current ? '2px solid blue' : '1px solid gray',
          padding: '8px',
          marginBottom: '10px',
        }}
      />
      <button onClick={focusInput}>Focus et sélectionner le champ</button>
    </div>
  );
}

export default UseRefComponent;
