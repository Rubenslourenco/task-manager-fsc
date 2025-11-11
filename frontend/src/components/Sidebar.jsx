import CustomButton from './CustomButton';

import logo from '../assets/images/1111.png';

import './Sidebar.scss';

const Sidebar = () => {
    return ( 
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="Full Stack Club" />
            </div>

            <div className="sing-out">
                <CustomButton>
                    Sair
                </CustomButton>
            </div>

        </div>
     );
}
 
export default Sidebar;