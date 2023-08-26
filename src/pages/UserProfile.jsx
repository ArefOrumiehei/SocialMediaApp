//Style
import '../Scss/UserProfile.scss';

//Icons
import { IconBrandGmail, IconBrandInstagram, IconBrandTelegram, IconBrandTwitter, IconDotsVertical, IconMail, IconMapPin, IconWorldWww } from '@tabler/icons-react';

//Component
import Posts from '../components/Posts'

const UserProfile = () => {
    return (
        <div className='userProfile'>
            <div className="images">
                <img className='cover' src="https://images.pexels.com/photos/2166/flight-sky-earth-space.jpg" alt=""/>
                <img className='userImg' src="https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
            </div>
            <div className="userContainer">
                <div className="profileUserInfo">
                    <div className="left">
                        <IconBrandTelegram className='socialIcon' />
                        <IconBrandGmail className='socialIcon' />
                        <IconBrandInstagram className='socialIcon' />
                        <IconBrandTwitter className='socialIcon' />
                    </div>
                    <div className="center">
                        <span className="username">Aref Orumiehei</span>
                        <div className="details">
                            <div className='item'>
                                <IconMapPin size={20}/>
                                <span>USA</span>
                            </div>
                            <div className='item'>
                                <IconWorldWww size={20}/>
                                <span>aref.com</span>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className="right">
                        <IconMail/>
                        <IconDotsVertical/>
                    </div>
                </div>
                <Posts/>
            </div>
        </div>
    );
};

export default UserProfile;