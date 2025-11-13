import { useNavigate } from 'react-router-dom';
import './Login.scss';

import logo from '../assets/images/logo-2.png';

import CustomButton from '../components/CustomButton';


const Login = () => {
    const navigate = useNavigate();

    const handleSingInClick = () => {
        navigate('/');
    }


    return ( 
        <div className="login-container">
            <img src={logo} alt="Full stack club" />
            <div className="button-contaner">
                <CustomButton onClick={handleSingInClick} >
                    Entrar
                </CustomButton>
            </div>
        </div>
     );
}
 
export default Login;