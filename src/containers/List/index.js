// imports NPM
import { connect } from 'react-redux';

// imports locaux
import List from 'src/components/List';
import { getFilteredTasks } from 'src/store/reducer';

// branchements
const mapStateToProps = state => ({
  tasks: getFilteredTasks(state.tasks),
});

const mapDispatchToProps = {};

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

// export
export default ListContainer;
