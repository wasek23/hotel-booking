import './home.scss';
import Header from '../common/Header/Header';
import Navbar from '../common/Header/Navbar';
import Featured from '../common/Featured/Featured';
import PropertyList from '../common/PropertyList/PropertyList';
import FeaturedProperty from '../common/FeaturedProperty/FeaturedProperty';
import MailList from '../common/MailList/MailList';
import Footer from '../common/Footer/Footer';

const Home = () => {
	return <div className='homePage'>
		<Navbar />

		<Header />

		<main>
			<Featured />

			<PropertyList />

			<FeaturedProperty />

			<MailList />
		</main>

		<Footer />
	</div>
}
export default Home;