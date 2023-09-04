//Styles
import '../Scss/Rightbar.scss';

//MUI
import { Avatar } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';

//Icons
import { IconCheck, IconX } from '@tabler/icons-react';

const RightBar = () => {
    return (
        <div className='rightbar'>
            <div className="container">
                <div className="item">
                    <span className='subTitle'>Suggestions for you</span>
                    <div className="user">
                        <div className="userInfo">
                            <Avatar className='suggestionsAvatar' sx={{ color : grey[900] , bgcolor: yellow[500] }}>AO</Avatar>
                            <span className='suggestionsName'>Aref Orumiehei</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                        <div className="Icons">
                            <IconCheck className='check'/>
                            <IconX className='close'/>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <Avatar className='suggestionsAvatar' sx={{ color : grey[900] , bgcolor: yellow[500] }}>AO</Avatar>
                            <span className='suggestionsName'>Aref Orumiehei</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                        <div className="Icons">
                            <IconCheck className='check'/>
                            <IconX className='close'/>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span className='subTitle'>Last Activities</span>
                    <div className="user">
                        <div className="userInfo">
                            <Avatar className='avatar' sx={{ color : grey[900] , bgcolor: yellow[500] }}>AO</Avatar>
                            <p><span className='activitiesName'>Aref Orumiehei</span> liked your post.</p>
                        </div>
                        <span className='time'>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <Avatar className='avatar' sx={{ color : grey[900] , bgcolor: yellow[500] }}>AO</Avatar>
                            <p><span className='activitiesName'>Aref Orumiehei</span> liked your post.</p>
                        </div>
                        <span className='time'>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <Avatar className='avatar' sx={{ color : grey[900] , bgcolor: yellow[500] }}>AO</Avatar>
                            <p><span className='activitiesName'>Aref Orumiehei</span> liked your post.</p>
                        </div>
                        <span className='time'>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <Avatar className='avatar' sx={{ color : grey[900] , bgcolor: yellow[500] }}>AO</Avatar>
                            <p><span className='activitiesName'>Aref Orumiehei</span> liked your post.</p>
                        </div>
                        <span className='time'>1 min ago</span>
                    </div>
                </div>
                <div className="item">
                    <span className="subTitle">Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <Avatar className='avatar' sx={{ color : grey[900] , bgcolor: yellow[500] }}>AO</Avatar>
                            <div className="online"/>
                            <span>Aref Orumiehei</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <Avatar className='avatar' sx={{ color : grey[900] , bgcolor: yellow[500] }}>AO</Avatar>
                            <div className="online"/>
                            <span>Aref Orumiehei</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <Avatar className='avatar' sx={{ color : grey[900] , bgcolor: yellow[500] }}>AO</Avatar>
                            <div className="online"/>
                            <span>Aref Orumiehei</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <Avatar className='avatar' sx={{ color : grey[900] , bgcolor: yellow[500] }}>AO</Avatar>
                            <div className="online"/>
                            <span>Aref Orumiehei</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <Avatar className='avatar' sx={{ color : grey[900] , bgcolor: yellow[500] }}>AO</Avatar>
                            <div className="online"/>
                            <span>Aref Orumiehei</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightBar;