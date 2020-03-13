import React from 'react';
import Column from './Column';
import PropTypes from 'prop-types';

class ColumnContainer extends React.Component {

  openColumn = () => {
    const {id, navigation, title} = this.props;
    navigation.navigate('ColumnActive', {
      columnId: id,
      title: title,
    });
  }

  render() {
    const { title, id} = this.props;
    return <Column title={title} openColumn={this.openColumn} id={id}/>;
  }
}

ColumnContainer.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default ColumnContainer;
