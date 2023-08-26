import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

//Style
import '../Scss/Comments.scss';

//Component
import Comment from './Comment';


const Comments = () => {

    const comments = [
        {
            id : 1,
            name : "Aref Orumiehei",
            description :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quia esse provident necessitatibus similique fugiat quibusdam. Pariatur vero voluptas necessitatibus nemo culpa voluptate unde tenetur illo, ipsam, quia ducimus dolore?',
            profilePic : 'https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            userId : 1,
        },
        {
            id : 2,
            name : "Aref Orumiehei",
            description :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quia esse provident necessitatibus similique fugiat quibusdam. Pariatur vero voluptas necessitatibus nemo culpa voluptate unde tenetur illo, ipsam, quia ducimus dolore?',
            profilePic : 'https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            userId : 1,
        },
    ]
    return (
        <div className='comments'>
            <div className="addComment">
                <span className="avatar">
                    <Avatar sx={{ zIndex: 1 , width: 40, height: 40 , bgcolor: deepPurple[500] }}>A</Avatar>
                </span>
                <input placeholder='write a comment...' />
                <button>Send</button>
            </div>
            {comments.map(comment => <Comment key={comment.id} name={comment.name} desc={comment.description} profilePic={comment.profilePic} userId={comment.userId} />)}
        </div>
    );
};

export default Comments;