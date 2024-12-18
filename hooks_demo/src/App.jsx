// App.js

import React from 'react';
import UseStateComponent from './useStateComponent';
import UseEffectComponent from './useEffectComponent';
import UseRefComponent from './useRefComponent';
import UseMemoComponent from './useMemoComponent';
import UseCallbackComponent from './useCallbackComponent';
import UseReducerComponent from './useReducerComponent';
import UseLayoutEffectComponent from './useLayoutEffectComponent';
import UseTransitionComponent from './useTransitionComponent';
import UseDeferredValueComponent from './useDeferredValueComponent';

function App() {
  return (
    <div>
      <h1>Exemples de Hooks avec une base de données</h1>

      <h2>useState</h2>
      <UseStateComponent />

      <h2>useEffect</h2>
      <UseEffectComponent />

      <h2>useRef</h2>
      <UseRefComponent />

      <h2>useMemo</h2>
      <UseMemoComponent />

      <h2>useCallback</h2>
      <UseCallbackComponent />

      <h2>useReducer</h2>
      <UseReducerComponent />

      <h2>useLayoutEffect</h2>
      <UseLayoutEffectComponent />

      <h2>useTransition</h2>
      <UseTransitionComponent />

      <h2>useDeferredValue</h2>
      <UseDeferredValueComponent />
    </div>
  );
}

export default App;
