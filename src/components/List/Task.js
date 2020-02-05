import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FaStar, FaTrashAlt, FaRegStar } from 'react-icons/fa';

const Task = ({
  // je peut accéder à label, done et fav puisqu'on a transmis ces props
  // au container qui les laisse passer
  label,
  done,
  fav,
  changeTaskDone,
  changeTaskFav,
  removeTask,
}) => {
  const cssClassNames = classNames('task', {
    'task--done': done,
    'task--fav': fav,
  });
  // Je prépare un composant
  const Favorite = fav ? FaStar : FaRegStar;

  return (
    <li className={cssClassNames}>
      <input checked={done} onChange={changeTaskDone} type="checkbox" />
      <span className="task-label">{label}</span>
      <FaTrashAlt className="task-trash" onClick={removeTask} />
      <Favorite className="task-fav" onClick={changeTaskFav} />
    </li>
  );
};

Task.propTypes = {
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  fav: PropTypes.bool.isRequired,
  changeTaskDone: PropTypes.func.isRequired,
  changeTaskFav: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
};

export default Task;
