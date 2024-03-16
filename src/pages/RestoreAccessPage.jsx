import { Link } from 'react-router-dom';

const RestoreAccessPage = () => {
    return (
        <div>
            <h1>Hello, it's restore access page</h1>

            <Link to='/login'>Log In</Link>
        </div>
    );
}

export default RestoreAccessPage;