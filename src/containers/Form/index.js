// imports NPM
import { connect } from 'react-redux';

// imports locaux
import Form from 'src/components/Form';
import { changeInput, addTaskAction } from 'src/store/reducer';


const mapStateToProps = state => ({
  inputValue: state.inputValue,
});


// on rend accessible dans le composant des fonctions
const mapDispatchToProps = dispatch => ({
  changeInputValue: (newInputValue) => {
    dispatch(changeInput(newInputValue));
  },
  addTask: () => {
    dispatch(addTaskAction());
  },
});

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

// export
export default FormContainer;
