import React from 'react';
import '../assets/scss/index.scss';
import alertify from 'alertifyjs';
import { Validation } from '../services/Validation';
import { useNavigate } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = () => {
    const users = JSON.parse(localStorage.getItem('users'));
    let userFound = null;
    users.forEach(user => {
      if (user.email === this.state.email) {
        userFound = user;
      }
    });
    if (userFound) {
      if (userFound.password !== this.state.password) {
        alertify.alert('Login Error !', 'Username and Password wrong');
      } else {
        localStorage.setItem('isAuthenticated', true);
        localStorage.setItem('userLogin', userFound.email);
        // alertify.alert('Login Success !', 'Success');
        this.props.navigate('/');
        window.location.reload();
      }
    } else {
      alertify.alert('Login Error !', 'Member is unregistered');
    }

    const emailRequired = Validation.required(
      'email',
      this.state.email,
      'Email Address Must Be Filled'
    );
    const passwordRequired = Validation.required(
      'password',
      this.state.password,
      'Password Must Be Filled'
    );

    const allValidationRequired = emailRequired && passwordRequired;

    if (!allValidationRequired) {
      alertify.alert('Login Error !', 'All Must Be Filled !');
    }
  };

  render() {
    return (
      <form className='login'>
        <div className='login__title'>LOGIN</div>

        <div className='pageone'>
          <div className='pageone__email'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              autoComplete='off'
              onChange={e => this.setState({ email: e.target.value })}
            />
            <p style={{ color: 'red' }}></p>
          </div>

          <div className='pageone__password'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              autoComplete='off'
              onChange={e => this.setState({ password: e.target.value })}
            />
            <p style={{ color: 'red' }}></p>
          </div>

          <div className='pageone__remember'>
            <input type='checkbox' />
            <label>Remember me</label>
          </div>

          <div className='pageone__btn'>
            <button type='button' onClick={this.handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const LoginNavigate = () => {
  const navigate = useNavigate();
  return <Login navigate={navigate} />;
};

export default LoginNavigate;
