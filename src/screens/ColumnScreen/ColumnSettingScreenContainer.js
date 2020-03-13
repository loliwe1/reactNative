import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ColumnSettingScreen from './ColumnSettingScreen';
import {deleteColumn , changeColumnTitle} from '../../store/routines/routines'

class ColumnSettingScreenContainer extends React.Component {
    deleteColumn = () => {
        const {columnId} = this.props.route.params
        console.log(columnId)
        const {deleteColumn, navigation} = this.props;
        deleteColumn({ columnId });
        navigation.navigate('My Desc');
    }
    changeColumnTitle = ({title}) => {
        const {columnId} = this.props.route.params;
        const {changeColumnTitle, navigation} = this.props;
        changeColumnTitle({columnId, title})
        navigation.navigate('ColumnActive', {
            columnId: columnId,
            title: title,
          });
    }

    render() {
    return (
      <ColumnSettingScreen deleteColumn={this.deleteColumn} changeColumnTitle={this.changeColumnTitle}/>
    )
  }
}

const mapStateToProps = (state) => ({
  columns: state.column,

});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  deleteColumn,
  changeColumnTitle,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ColumnSettingScreenContainer);
