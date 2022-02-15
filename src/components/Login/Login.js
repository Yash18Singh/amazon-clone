import react, {useState} from 'react';
import './Login.css';
import {Link, useHistory} from 'react-router-dom';

const Login = ()=>{
    document.title='Amazon | Login/Signup';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword()
    }

    const register = (e)=>{
        e.preventDefault();
    }

    return(
        <>
            <div className='login'>
                <Link to='/'>
                    <img className='login__logo'
                         src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG'
                    />
                </Link>

                <div className='login__container'>
                    <h1>Sign-In</h1>

                    <form>
                        <input type='email' placeholder='EMAIL' />
                        <input type='password' placeholder='PASSWORD'/>
                        <button onClick={login} type='submit'>Sign In</button>
                    </form>

                    <p>
                        By signing-in you agree to Amazon's Conditions of Use & Sale.
                        Please see our Privacy Notice, our Cookies Notice and our
                        Interest-Based Ads Notice.
                    </p>

                    <button onClick={register}>Create Your Amazon Account</button>
                </div>
            </div>
        </>
    )
}
export default Login;