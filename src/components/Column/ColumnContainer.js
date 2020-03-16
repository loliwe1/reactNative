import PropTypes from 'prop-types';
import React from 'react';
import Column from './Column';

class ColumnContainer extends React.Component {
  openColumn = () => {
    const { id, navigation, title } = this.props;
    navigation.navigate('ColumnActive', {
      columnId: id,
      title,
    });
  }

  render() {
    const { title, id } = this.props;
    return <Column title={title} openColumn={this.openColumn} id={id} />;
  }
}

ColumnContainer.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ColumnContainer;
