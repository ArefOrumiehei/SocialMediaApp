//Style
import '../Scss/Leftbar.scss';

//Components
import LeftbarItem from './LeftbarItem';

//Icons
import { IconBooks, IconCalendarEvent, IconDeviceGamepad2, IconMessage2, IconSchool, IconUsersGroup } from '@tabler/icons-react';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

//MUI
import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';


const LeftBar = () => {
    return (
        <div className='leftbar'>
            <div className="container">
                <div className="menu">
                    <LeftbarItem
                    icon={<Avatar sx={{ zIndex: 1 , width: 35, height: 35 , bgcolor: deepPurple[500] }}>A</Avatar>}
                    title='Aref'
                    />
                    <LeftbarItem 
                    icon={<IconUsersGroup/>}
                    title='Friends'
                    />
                    <LeftbarItem 
                    icon={<GroupsOutlinedIcon/>}
                    title='Groups'
                    />
                    <LeftbarItem 
                    icon={<StorefrontOutlinedIcon/>}
                    title='Marketplace'
                    />
                    <LeftbarItem 
                    icon={<SmartDisplayOutlinedIcon/>}
                    title='Watch'
                    />
                    <LeftbarItem 
                    icon={<TimerOutlinedIcon/>}
                    title='Memories'
                    />
                </div>
                <hr/>
                <div className="menu">
                    <span className='subTitle'>Your Shortcuts</span>
                    <LeftbarItem 
                    icon={<IconCalendarEvent/>}
                    title='Events'
                    />
                    <LeftbarItem 
                    icon={<IconDeviceGamepad2/>}
                    title='Gaming'
                    />
                    <LeftbarItem 
                    icon={<CollectionsOutlinedIcon/>}
                    title='Gallery'
                    />
                    <LeftbarItem 
                    icon={<VideoLibraryOutlinedIcon/>}
                    title='Videos'
                    />
                    <LeftbarItem 
                    icon={<IconMessage2/>}
                    title='Messages'
                    />
                </div>
                <hr/>
                <div className="menu">
                    <span className="subTitle">Others</span>
                    <LeftbarItem 
                    icon={<IconSchool/>}
                    title='Tutorials'
                    />
                    <LeftbarItem 
                    icon={<IconBooks/>}
                    title='Courses'
                    />
                    <LeftbarItem 
                    icon={<SaveOutlinedIcon/>}
                    title='Saved'
                    />
                </div>
            </div>
        </div>
    );
};

export default LeftBar;