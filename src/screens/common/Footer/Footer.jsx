import './Footer.scss';

const Footer = () => {
	return <footer className='footer'>
		<div className='container'>
			<ul className='footerList'>
				<li className='footerItem'><a href='/'>Countries</a></li>
				<li className='footerItem'><a href='/'>Regions</a></li>
				<li className='footerItem'><a href='/'>Cities</a></li>
				<li className='footerItem'><a href='/'>Districts</a></li>
				<li className='footerItem'><a href='/'>Airports</a></li>
				<li className='footerItem'><a href='/'>Hotels</a></li>
			</ul>
			<ul className='footerList'>
				<li className='footerItem'><a href='/'>Homes </a></li>
				<li className='footerItem'><a href='/'>Apartments </a></li>
				<li className='footerItem'><a href='/'>Resorts </a></li>
				<li className='footerItem'><a href='/'>Villas</a></li>
				<li className='footerItem'><a href='/'>Hostels</a></li>
				<li className='footerItem'><a href='/'>Guest houses</a></li>
			</ul>
			<ul className='footerList'>
				<li className='footerItem'><a href='/'>Unique places to stay</a></li>
				<li className='footerItem'><a href='/'>Reviews</a></li>
				<li className='footerItem'><a href='/'>Unpacked: Travel articles</a></li>
				<li className='footerItem'><a href='/'>Travel communities</a></li>
				<li className='footerItem'><a href='/'>Seasonal and holiday deals</a></li>
			</ul>
			<ul className='footerList'>
				<li className='footerItem'><a href='/'>Car rental </a></li>
				<li className='footerItem'><a href='/'>Flight Finder</a></li>
				<li className='footerItem'><a href='/'>Restaurant reservations</a></li>
				<li className='footerItem'><a href='/'>Travel Agents</a></li>
			</ul>
			<ul className='footerList'>
				<li className='footerItem'><a href='/'>Curtomer Service</a></li>
				<li className='footerItem'><a href='/'>Partner Help</a></li>
				<li className='footerItem'><a href='/'>Careers</a></li>
				<li className='footerItem'><a href='/'>Sustainability</a></li>
				<li className='footerItem'><a href='/'>Press center</a></li>
				<li className='footerItem'><a href='/'>Safety Resource Center</a></li>
				<li className='footerItem'><a href='/'>Investor relations</a></li>
				<li className='footerItem'><a href='/'>Terms & conditions</a></li>
			</ul>
		</div>

		<p className='copyright'>Copyright &copy; 2022 | Hotel Booking</p>
	</footer>
}
export default Footer;