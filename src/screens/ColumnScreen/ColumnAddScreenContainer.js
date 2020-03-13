import React from 'react';
import ColumnAddScreen from './ColumnAddScreen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addColumn} from '../../store/routines/routines'
import PropTypes from 'prop-types';

class ColumnAddScreenContainer extends React.Component {

    addColumn = (values) => {
       const {addColumn, navigation } = this.props;
       const {title} = values;
       const desc = '123123'
       addColumn({title, desc});
       navigation.goBack()
    }
    render() {
        console.log(this.props)
        return (
            <ColumnAddScreen addColumn={this.addColumn}/>
        )
    }
}
const mapStateToProps = state => ({
    creator: state.user.email,
})
const mapDispatchToProps = (dispatch) => bindActionCreators({
 addColumn,
}, dispatch)

ColumnAddScreenContainer.propTypes = {
    addColumn: PropTypes.func.isRequired,
    creator: PropTypes.string.isRequired,
    navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ColumnAddScreenContainer)