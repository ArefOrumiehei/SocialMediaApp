import { Link } from 'react-router-dom';

//Style
import '../Scss/Navbar.scss';

//Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

//Menu



const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='left'>
                <Link to='/'>
                    <span>Aref Social</span>
                </Link>
                <HomeOutlinedIcon/>
                <DarkModeOutlinedIcon/>
                <GridViewOutlinedIcon/>
                <div className="search">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder='Search...' />
                </div>
            </div>
            <div className="right">
                <EmailOutlinedIcon/>
                <NotificationsNoneOutlinedIcon/>
                <div className="user">
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;