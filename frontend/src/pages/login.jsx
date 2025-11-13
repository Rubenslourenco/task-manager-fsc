import CustomButton from '../components/CustomButton';

import './Login.scss';

import logo from '../assets/logo.png';



const Login = () => {
    return ( 
        <div className="login-container">
            <img src={logo} alt="Full stack club" />
            <div className="button-contaner">
                <CustomButton>
                    Entrar
                </CustomButton>
            </div>
        </div>
     );
}
 
export default Login;