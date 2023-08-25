import { Link } from 'react-router-dom';

//Style
import '../Scss/Navbar.scss';

//Components
import UserAvatar from './UserAvatar'

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
                <Link className='link' to='/'>
                    <span>Aref Social</span>
                </Link>
                <HomeOutlinedIcon className='icon'/>
                <DarkModeOutlinedIcon className='icon'/>
                <GridViewOutlinedIcon className='icon'/>
                <div className="search">
                    <SearchOutlinedIcon className='searchIcon'/>
                    <input type="text" placeholder='Search...' />
                </div>
            </div>
            <div className="right">
                <EmailOutlinedIcon className='icon'/>
                <NotificationsNoneOutlinedIcon className='icon'/>
                <div className="user">
                    <UserAvatar/>
                    <span>Aref</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;