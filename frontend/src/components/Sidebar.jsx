import { useNavigate } from 'react-router-dom';

import CustomButton from './CustomButton';

import logo from '../assets/images/1111.png';

import './Sidebar.scss';

const Sidebar = () => {

    const navigate = useNavigate();

    const handleSignOutClick = () => {
        navigate('/login');
    }
    return ( 
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="Full Stack Club" />
            </div>

            <div className="sing-out">
                <CustomButton onClick={handleSignOutClick}>
                    Sair
                </CustomButton>
            </div>

        </div>
     );
}
 
export default Sidebar;