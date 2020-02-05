import React from 'react';

import Form from 'src/containers/Form';
// on importe le container
import Counter from 'src/containers/Counter';
import List from 'src/containers/List';
import './app.scss';

// Fonction App qui retourne du JSX
const App = () => (
  <div id="todo">
    <Form />
    <Counter />
    <List />
  </div>
);

export default App;
