// imports NPM
import { connect } from 'react-redux';

// imports locaux
import Counter from 'src/components/Counter';


const mapStateToProps = state => ({
  count: state.tasks.filter(task => !task.done).length,
});


const mapDispatchToProps = {};

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

// export
export default CounterContainer;
