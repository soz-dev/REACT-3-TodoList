// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './counter.scss';

// == Composant
const Counter = ({ count }) => {
  let message = '';
  switch (count) {
    case 0:
      message = 'Aucune tâche en cours';
      break;
    case 1:
      message = '1 tâche en cours';
      break;
    default:
      message = `${count} tâches en cours`;
  }

  return (
    <p id="todo-counter">
      {message}
    </p>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

// == Export
export default Counter;
