import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import SignUpScreen from './SignUpScreen';
import {signUpTrigger} from '../../store/routines/routines';

class SignUpScreenContainer extends React.Component {

  signUpTrigger = async (v) => {
    console.log('v', v)
    const {signUpTrigger, navigation} = this.props;
    await signUpTrigger(v);
    navigation.navigate('My Desc');
  }

  render() {
    return (
      <SignUpScreen signUpTrigger={this.signUpTrigger} />
    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  signUpTrigger,
}, dispatch)

SignUpScreenContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  signUpTrigger: PropTypes.func.isRequired,
  
};

export default connect(null, mapDispatchToProps)(SignUpScreenContainer);
