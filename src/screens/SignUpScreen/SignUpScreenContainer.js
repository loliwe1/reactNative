import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindPromiseCreators } from 'redux-saga-routines';
import SignUpScreen from './SignUpScreen';
import { signUpTriggerPromiseCreator } from '../../store/routines/routines';


class SignUpScreenContainer extends React.Component {
  signUpTrigger = async (v) => {
    const { signUpTriggerPromiseCreator, navigation } = this.props;

    try {
      await signUpTriggerPromiseCreator(v)
        .then(() => navigation.navigate('My Desc'));
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <SignUpScreen signUpTrigger={this.signUpTrigger} />
    );
  }
}

const mapDispatchToProps = (dispatch) => bindPromiseCreators({
  signUpTriggerPromiseCreator,
}, dispatch);

SignUpScreenContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  signUpTriggerPromiseCreator: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SignUpScreenContainer);
