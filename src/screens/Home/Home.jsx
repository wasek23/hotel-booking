import './home.scss';
import Header from '../common/Header/Header';
import Navbar from '../common/Header/Navbar';
import Featured from '../common/Featured/Featured';

const Home = () => {
	return <div className='homePage'>
		<Navbar />
		<Header />

		<main>
			<Featured />
		</main>
	</div>
}
export default Home;