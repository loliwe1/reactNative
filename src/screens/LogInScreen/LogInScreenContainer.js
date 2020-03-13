import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bindPromiseCreators } from 'redux-saga-routines';
import PropTypes from 'prop-types';
import LogInScreen from './LogInScreen';
import {logInTrigger, persisSignInPromiseCreator} from '../../store/routines/routines';

class LogInScreenContainer extends React.Component {
  
  state = {load: true}

  logInTrigger = (values) => {
    const {logInTrigger} = this.props;
    logInTrigger(values)
  }

  async componentDidMount() {
    const {persisSignInPromiseCreator, navigation} = this.props
    try {
      await persisSignInPromiseCreator({navigation})
    } catch(e) {
      console.log(e)
    } finally {
      this.setState({load: false})
    }
  }
  
  componentDidUpdate() {
    const { user, navigation } = this.props;
    if (user.token) {
      navigation.navigate('My Desc')
    }
  }

  render() {
    return (
      <LogInScreen logInTrigger={this.logInTrigger} load={this.state.load} />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => {
  return {
    ...bindPromiseCreators({
      persisSignInPromiseCreator,
    }, dispatch),
    ...bindActionCreators({ 
      logInTrigger, 
    }, dispatch)
  };
}

LogInScreenContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  logInTrigger: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInScreenContainer);
