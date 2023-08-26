//Style
import '../Scss/Posts.scss';


import Post from './Post';

const Posts = () => {

    const postData = [
        {
            id : 1,
            name : 'Aref Orumiehei',
            userId : 1,
            profilePic : 'https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta pariatur fugiat eaque sed cum inventore quis, minus quasi. Error, necessitatibus perspiciatis? Ullam provident assumenda labore nulla qui veritatis, delectus quis!",
            image : 'https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
            id : 2,
            name : 'Aref Orumiehei',
            userId : 1,
            profilePic : 'https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta pariatur fugiat eaque sed cum inventore quis, minus quasi. Error, necessitatibus perspiciatis? Ullam provident assumenda labore nulla qui veritatis, delectus quis!",
        },
    ]


    return (
        <div className='posts'>
            {postData.map(post => <Post key={post.id} name={post.name} userId={post.userId} profilePic={post.profilePic} image={post.image} desc={post.description} />)}
        </div>
    );
};

export default Posts;