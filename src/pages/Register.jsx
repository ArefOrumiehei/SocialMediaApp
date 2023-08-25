import { Link } from 'react-router-dom';

//Style
import '../Scss/Register.scss';

const Register = () => {
    return (
        <div className='register'>
            <div className='cards'>
                <div className='left'>
                    <h1>Register</h1>
                    <form>
                        <input type="text" name="name" placeholder='your name' />
                        <input type="text" name="username" placeholder='Username...' />
                        <input type="email" name="email" placeholder='Email...' />
                        <input type="password" name="password" placeholder='Password...' />
                        <button>Register</button>
                    </form>
                </div>
                <div className='right'>
                    <h1>Hello World.</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi maiores architecto quidem eligendi enim aperiam ea repellendus fugiat minus natus. Quia dignissimos odio unde maiores minima, alias illum facere sed.</p>
                    <span>Do you have an account?</span>
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;