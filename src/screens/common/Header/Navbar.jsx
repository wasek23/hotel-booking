import { Link } from 'react-router-dom';

import './navbar.scss';

const Navbar = () => {
	return <nav className='navbar'>
		<div className='container'>
			<Link to='/' className='logo'><img src='logo.png' alt='logo' /></Link>

			<div className='item'>
				<button className='btnWhite registerBtn'>Register</button>
				<button className='btnWhite loginBtn'>Login</button>
			</div>
		</div>
	</nav>
}
export default Navbar;