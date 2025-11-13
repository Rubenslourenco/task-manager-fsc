
import './Login.scss';

import logo from '../assets/images/logo-2.png';

import CustomButton from '../components/CustomButton';


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