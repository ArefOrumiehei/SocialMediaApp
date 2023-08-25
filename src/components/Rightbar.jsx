import { Avatar } from '@mui/material';
import '../Scss/Rightbar.scss';
import { grey, yellow } from '@mui/material/colors';

const RightBar = () => {
    return (
        <div className='rightbar'>
            <div className="container">
                <div className="item">
                    <span className='subTitle'>Suggestions for you</span>
                    <div className="user">
                        <div className="userInfo">
                            <Avatar sx={{ color : grey[900] , bgcolor: yellow[500] }}>AO</Avatar>
                            <span>Aref Orumiehei</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <Avatar className='avatar' sx={{ color : grey[900] , bgcolor: yellow[500] }}>AO</Avatar>
                            <span>Aref Orumiehei</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span className='subTitle'>Last activities</span>
                    <div className="user">
                        <div className="userInfo">
                            <Avatar className='avatar' sx={{ color : grey[900] , bgcolor: yellow[500] }}>AO</Avatar>
                            <p><span>Aref Orumiehei</span> liked your post.</p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <Avatar className='avatar' sx={{ color : grey[900] , bgcolor: yellow[500] }}>AO</Avatar>
                            <p><span>Aref Orumiehei</span> liked your post.</p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <Avatar className='avatar' sx={{ color : grey[900] , bgcolor: yellow[500] }}>AO</Avatar>
                            <p><span>Aref Orumiehei</span> liked your post.</p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <Avatar className='avatar' sx={{ color : grey[900] , bgcolor: yellow[500] }}>AO</Avatar>
                            <p><span>Aref Orumiehei</span> liked your post.</p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="item">
                    <span className="subTitle">Online friends</span>
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