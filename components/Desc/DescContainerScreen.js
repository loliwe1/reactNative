import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../../store/actions/actions';
import Desc from './DescScreen';


const mapStateToProps = (state) => ({
  column: state.column,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addTask,

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Desc);
