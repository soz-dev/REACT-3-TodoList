// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import Task from 'src/containers/List/Task';
import './list.scss';

// == Composant
const List = ({ tasks }) => (
  <ul id="todo-list">
    {tasks.map(task => (
      <Task key={task.id} {...task} />
    ))}
  </ul>
);

List.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

// == Export
export default List;
