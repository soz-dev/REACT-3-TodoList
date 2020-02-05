// imports NPM
import { connect } from 'react-redux';

// imports locaux
import Task from 'src/components/List/Task';
import { taskCheck, taskDelete, taskFav } from 'src/store/reducer';

// branchements
const mapStateToProps = null;

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeTaskDone: () => {
    dispatch(taskCheck(ownProps.id));
  },
  changeTaskFav: () => {
    dispatch(taskFav(ownProps.id));
  },
  removeTask: () => {
    dispatch(taskDelete(ownProps.id));
  },
});

const TaskContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Task);

// export
export default TaskContainer;
