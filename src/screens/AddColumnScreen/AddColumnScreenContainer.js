import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addColumn } from '../../store/routines/routines';
import ColumnAddScreen from './AddColumnScreen';

class ColumnAddScreenContainer extends React.Component {
    addColumn = (values) => {
      const { addColumn, navigation } = this.props;
      const { title } = values;
      const desc = '123123';
      addColumn({ title, desc });
      navigation.goBack();
    }

    render() {
      return (
        <ColumnAddScreen addColumn={this.addColumn} />
      );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addColumn,
}, dispatch);

ColumnAddScreenContainer.propTypes = {
  addColumn: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(null, mapDispatchToProps)(ColumnAddScreenContainer);
