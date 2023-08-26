import PropTypes from 'prop-types'

//Style
import '../Scss/Comment.scss';
import { Link } from 'react-router-dom';



const Comment = ({name , profilePic , desc , userId}) => {
    return (
        <div className='comment'>
            <img src={profilePic} alt="" />
            <div className="info">
                <Link className='link' to={`/profile/${userId}`}>
                    <span className="username">{name}</span>
                </Link>
                <p className="desc">{desc}</p>
            </div>
            <span className="date">1 min ago</span>
        </div>
    );
};

Comment.propTypes = {
    name : PropTypes.string,
    profilePic : PropTypes.any,
    desc : PropTypes.string,
    userId : PropTypes.number,
}

export default Comment;