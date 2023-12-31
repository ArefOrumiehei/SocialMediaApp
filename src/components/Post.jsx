import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

//Style
import '../Scss/Post.scss';

//Icons
import { IconDots, IconHeart, IconHeartFilled, IconMessageDots, IconShare } from '@tabler/icons-react';

//Component
import Comments from './Comments';


const Post = ({name , userId , profilePic , image , desc}) => {

    const [openComment , setOpenComment] = useState(false)
    const [openShare , setOpenShare] = useState(false)
    const [isLiked , setIsLiked] = useState(false)
    
    const commentHandler = () => {
        setOpenComment(!openComment);
        if (openShare) setOpenShare(false);
    }

    const shareHandler = () => {
        setOpenShare(!openShare);
        if (openComment) setOpenComment(false)
    }

    return (
        <div className='post'>
            <div className="postCard">
                <div className="cardHeader">
                    <div className="userData">
                        <img className='profileImg' src={profilePic} alt="" />
                        <div className="userInfo">
                            <Link className='link' to={`/profile/${userId}`}>
                                <span className='username'>{name}</span>
                            </Link>
                            <span className='time'>a few seconds ago</span>
                        </div>
                    </div>
                    <IconDots className='moreIcon'/>
                </div>
                <p className='desc'>{desc}</p>
                <img onDoubleClick={() => setIsLiked(!isLiked)} className='postImg' src={image} alt="" />
                <div className="buttons">
                    <button onClick={() => setIsLiked(!isLiked)}>
                        {isLiked ? <IconHeartFilled/> : <IconHeart/>}
                        <span>Like</span>
                    </button>
                    <button onClick={commentHandler}>
                        <IconMessageDots className='commentIcon'/>
                        <span>Comments</span>
                    </button>
                    <button onClick={shareHandler}>
                        <IconShare className='shareIcon'/>
                        <span>Share</span>
                    </button>
                </div>
                {openComment && <Comments/>}
                {/* {openShare && <Share/>} */}
            </div>
        </div>
    );
};

Post.propTypes = {
    name : PropTypes.string,
    userId : PropTypes.number,
    profilePic : PropTypes.any,
    image : PropTypes.any,
    desc : PropTypes.string,
}

export default Post;