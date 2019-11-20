import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = (e) => {
    const {value, name} = e.target;
    this.setState({[name]: value})
    }

    render() {
        return (
        <div className="sign-in">
            <h2>I Already Have An Account</h2>
            <span>SIgn in with your email and password</span>
        
        <form onSubmit={this.handleSubmit}>
            <FormInput name='email' type='emal' value={this.state.email} 
            required
            handleChange={this.handleChange}
            label="email"
            />

            <FormInput name='password' type='password' value={this.state.password} 
            required handleChange={this.handleChange}
            label="password" />
            <div className='buttons'>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} 
            isGoogleSignIn >Sign in with Google</CustomButton>
      </div>
        </form>
        
        </div>
        )
    }
}
export default SignIn;