import { Link } from 'react-router-dom';

import './navbar.scss';
import Logo from '../../../img/logo.png';

const Navbar = () => {
	return <nav className='navbar'>
		<div className='container'>
			<Link to='/' className='logo'><img src={Logo} alt='logo' /></Link> {/* Logo */}

			<div className='buttons'>
				<button className='btnWhite registerBtn'>Register</button>
				<button className='btnWhite loginBtn'>Login</button>
			</div> {/* Buttons */}
		</div> {/* Container */}
	</nav>
}
export default Navbar;