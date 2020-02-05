// j'importe mes datas pour alimenter le state initial
import initialTasks from 'src/data';

// state initial qui fait référence au reducer
const initialState = {
  tasks: initialTasks,
  inputValue: '',
};

// action types
// ça permet d'éviter les fautes de frappes
// puisque nous sommes averti si nous utilisons une
// variable non définie
const CHANGE_INPUT = 'CHANGE_INPUT';
const ADD_TASK = 'ADD_TASK';
const TASK_CHECK = 'TASK_CHECK';
const TASK_DELETE = 'TASK_DELETE';
const TASK_FAV = 'TASK_FAV';

// je peut se faire une fonction pour factoriser
const toggleProperty = (state, action, property) => {
  // je recup les taches actuelles
  const { tasks } = state;
  const newTasks = tasks.map((task) => {
    if (task.id === action.id) {
      return {
        // toutes les infos de la tache actuelle
        ...task,
        // inverser la valeur de la propriété qui nous intéresse
        [property]: !task[property],
      };
    }
    // Je retourne la tache sans modification
    return task;
  });
  return newTasks;
};


const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  // Dans le cas ou l'action CHANGE_INPUT est active
    case CHANGE_INPUT:
      return {
        ...state,
        inputValue: action.inputValue,
      };

    case ADD_TASK: {
      // je récupère inputValue depuis le state (state est en paramètre de la fonction reducer)
      const { inputValue } = state;
      // je récupère les tâches actuelles (sans la nouvelle)
      const { tasks: oldTasks } = state;
      // je récupère les id pour pouvoir en générer un nouveau
      const allIds = oldTasks.map(task => task.id);
      // je génère le nouvel id
      const id = allIds.length > 0 ? Math.max(...allIds) + 1 : 1;
      const newTask = {
        id,
        label: inputValue,
        done: false,
        fav: false,
      };

      const tasksCopy = [
        ...oldTasks,
        newTask,
      ];

      return {
        ...state,
        tasks: tasksCopy,
        inputValue: '',
      };
    }
    case TASK_CHECK: {
      // Manipuler les taches pour changer la valeur de la tache avec l'id souhaité
      const newTasks = toggleProperty(state, action, 'done');
      // je retourne ma copie du state modifié
      return {
        ...state,
        tasks: newTasks,
      };
    }
    case TASK_FAV: {
      const newTasks = toggleProperty(state, action, 'fav');
      // je retourne ma copie du state modifié
      return {
        ...state,
        tasks: newTasks,
      };
    }
    case TASK_DELETE: {
      // recup les taches
      const { tasks } = state;
      // Nouveau tableau
      const newTasks = tasks.filter(task => task.id !== action.id);
      // je retourne ma copie du state modifié
      return {
        ...state,
        tasks: newTasks,
      };
    }
    default:
      return state;
  }
};

// action creators
export const changeInput = paramInputValue => ({
  type: CHANGE_INPUT,
  inputValue: paramInputValue,
});

export const addTaskAction = () => ({
  type: ADD_TASK,
});

export const taskCheck = id => ({
  type: TASK_CHECK,
  id,
});

export const taskDelete = id => ({
  type: TASK_DELETE,
  id,
});

export const taskFav = id => ({
  type: TASK_FAV,
  id,
});

// selectors
export const getFilteredTasks = tasks => [
  // + En haut, les tâches non effectuées favories
  ...tasks.filter(task => !task.done && task.fav),
  // + Ensuite, les tâches non effectuées non favories
  ...tasks.filter(task => !task.done && !task.fav),
  // + Ensuite, les tâches effectuées
  ...tasks.filter(task => task.done),
];

export default reducer;
