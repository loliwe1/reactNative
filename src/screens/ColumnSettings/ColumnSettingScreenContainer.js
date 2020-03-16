import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ColumnSettingScreen from './ColumnSettingScreen';
import { deleteColumn, changeColumnTitle } from '../../store/routines/routines';

class ColumnSettingScreenContainer extends React.Component {
    deleteColumn = () => {
      const { deleteColumn, navigation, route } = this.props;
      const { columnId } = route.params;
      deleteColumn({ columnId });
      navigation.navigate('My Desc');
    }

    changeColumnTitle = ({ title }) => {
      const { changeColumnTitle, navigation, route } = this.props;
      const { columnId } = route.params;
      changeColumnTitle({ columnId, title });
      navigation.navigate('ColumnActive', {
        columnId,
        title,
      });
    }

    render() {
      return (
        <ColumnSettingScreen
          deleteColumn={this.deleteColumn}
          changeColumnTitle={this.changeColumnTitle}
        />
      );
    }
}

ColumnSettingScreenContainer.propTypes = {
  deleteColumn: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  route: PropTypes.objectOf(PropTypes.any).isRequired,
  changeColumnTitle: PropTypes.func.isRequired,

};

const mapStateToProps = (state) => ({
  columns: state.column,

});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  deleteColumn,
  changeColumnTitle,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ColumnSettingScreenContainer);
