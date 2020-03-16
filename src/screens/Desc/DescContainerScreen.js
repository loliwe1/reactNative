import React from 'react';
// import { bindActionCreators } from 'redux';
import { bindPromiseCreators } from 'redux-saga-routines';
import { connect } from 'react-redux';
import Desc from './DescScreen';
import { getColumnsPromiseCreator } from '../../store/routines/routines';

class DescContainerScreen extends React.Component {
  state = {
    loadColumns: true,
  };

  async componentDidMount() {
    const { getColumnsPromiseCreator } = this.props;

    try {
      await getColumnsPromiseCreator();
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loadColumns: false });
    }
  }

  render() {
    const { column, navigation } = this.props;
    const { loadColumns } = this.state;
    return (
      <Desc column={column} navigation={navigation} loadColumns={loadColumns} />
    );
  }
}

const mapStateToProps = (state) => ({
  column: state.column,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => bindPromiseCreators({
  getColumnsPromiseCreator,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DescContainerScreen);
