import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bindPromiseCreators } from 'redux-saga-routines';
import PropTypes from 'prop-types';
import LogInScreen from './LogInScreen';
import { logInTrigger, persisSignInPromiseCreator } from '../../store/routines/routines';

class LogInScreenContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { load: true };
  }

  async componentDidMount() {
    const { persisSignInPromiseCreator, navigation } = this.props;
    try {
      await persisSignInPromiseCreator({ navigation });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ load: false });
    }
  }

  componentDidUpdate() {
    const { user, navigation } = this.props;
    if (user.token) {
      navigation.navigate('My Desc');
    }
  }

  logInTrigger = (values) => {
    const { logInTrigger } = this.props;
    logInTrigger(values);
  }

  render() {
    const { load } = this.state;
    return (
      <LogInScreen logInTrigger={this.logInTrigger} load={load} />
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => (
  {
    ...bindPromiseCreators({
      persisSignInPromiseCreator,
    }, dispatch),
    ...bindActionCreators({
      logInTrigger,
    }, dispatch),
  });


LogInScreenContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  logInTrigger: PropTypes.func.isRequired,
  persisSignInPromiseCreator: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInScreenContainer);
