import { Link } from 'react-router-dom';


//Style
import '../Scss/Login.scss';

const Login = () => {
    return (
        <div className='login'>
            <div className='cards'>
                <div className='left'>
                    <h1>Hello World.</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi maiores architecto quidem eligendi enim aperiam ea repellendus fugiat minus natus. Quia dignissimos odio unde maiores minima, alias illum facere sed.</p>
                    <span>Don`t you have an account?</span>
                    <Link to='/register'>
                        <button>Register</button>
                    </Link>
                </div>
                <div className='right'>
                    <h1>Login</h1>
                    <form>
                        <input type="text" name="username" placeholder='Username...' />
                        <input type="password" name="password" placeholder='Password...' />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;