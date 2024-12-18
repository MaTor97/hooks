// UseReducerComponent.js

import React, { useReducer } from 'react';
import database from './Database';

const initialState = {
  users: database.users,
};

function userReducer(state, action) {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, users: [...state.users, action.user] };
    case 'REMOVE_USER':
      return { ...state, users: state.users.filter(user => user.id !== action.id) };
    default:
      return state;
  }
}

function UseReducerComponent() {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const addUser = (name) => {
    const newUser = { id: state.users.length + 1, name: name, email: '', age: 0 };
    dispatch({ type: 'ADD_USER', user: newUser });
  };

  const removeUser = (id) => {
    dispatch({ type: 'REMOVE_USER', id: id });
  };

  return (
    <div>
      <h3>useReducer: Ajouter et supprimer un utilisateur</h3>
      <button onClick={() => addUser('John Doe')}>Ajouter John</button>
      <ul>
        {state.users.map((user) => (
          <li key={user.id}>
            {user.name} 
            <button onClick={() => removeUser(user.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseReducerComponent;
