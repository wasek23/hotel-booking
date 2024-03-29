import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCircleXmark, faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

import './SingleHotel.scss';
import Header from '../common/Header/Header';
import Navbar from '../common/Header/Navbar';
import MailList from '../common/MailList/MailList';
import Footer from '../common/Footer/Footer';

const SingleHotel = () => {
	const [slideNumber, setSlideNumber] = useState(0);
	const [isSliderOpen, setIsSliderOpen] = useState(false);

	const images = [
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1',
		},
	];

	const onSliderOpen = (index) => {
		setSlideNumber(index);
		setIsSliderOpen(true);
	}

	const onSlideChange = (direction) => {
		let newSlideNumber;

		if ('left' === direction) {
			newSlideNumber = slideNumber === 0 ? images.length - 1 : slideNumber - 1;
		} else {
			newSlideNumber = slideNumber === images.length - 1 ? 0 : slideNumber + 1;
		}

		setSlideNumber(newSlideNumber);
	};


	return <div className='singleHotelPage'>
		<Navbar />

		<Header type='list' />

		<main>
			<section className='hotelSection'>
				<div className='container'>
					{isSliderOpen && <div className='hotelImageSlider'>
						<FontAwesomeIcon className='close' icon={faCircleXmark} onClick={() => setIsSliderOpen(false)} />

						<FontAwesomeIcon className='arrow' icon={faCircleArrowLeft} onClick={() => onSlideChange('left')} />

						<figure className='imgFigure'>
							<img src={images[slideNumber].src} alt='Tower Street Apartments Hotel' />
						</figure>

						<FontAwesomeIcon className='arrow' icon={faCircleArrowRight} onClick={() => onSlideChange('right')} />
					</div>}

					<div className='hotelOverview'>
						<div className='content'>
							<h1 className='title'>Tower Street Apartments</h1>

							<div className='address'>
								<FontAwesomeIcon icon={faLocationDot} />
								<span>Elton St 125 New york</span>
							</div>

							<span className='distance'>Excellent location - 500m from center</span>

							<span className='priceHighlight'>Book a stay over $114 at this property and get a free airport taxi</span>
						</div>

						<button className='btnPrimary bookNow'>Reserve or Book Now!</button>
					</div> {/* Overview */}

					<div className='hotelImages'>
						{images.map((image, index) => <figure className='imgFigure' key={index}>
							<img src={image.src} alt='Tower Street Apartments Hotel' onClick={() => onSliderOpen(index)} />
						</figure>)}
					</div> {/* Images */}

					<div className='hotelDetails'>
						<div className='detainsContent'>
							<h2 className='title'>Stay in the heart of City</h2>

							<p className='description'>
								Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
								Street Apartments has accommodations with air conditioning and
								free WiFi. The units come with hardwood floors and feature a
								fully equipped kitchenette with a microwave, a flat-screen TV,
								and a private bathroom with shower and a hairdryer. A fridge is
								also offered, as well as an electric tea pot and a coffee
								machine. Popular points of interest near the apartment include
								Cloth Hall, Main Market Square and Town Hall Tower. The nearest
								airport is John Paul II International Kraków–Balice, 16.1 km
								from Tower Street Apartments, and the property offers a paid
								airport shuttle service.
							</p>
						</div> {/* Details Content */}

						<div className='detailsPrice'>
							<h3>Perfect for a 9-night stay!</h3>

							<span>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</span>

							<h3 className='price'><strong>$945</strong> (9 nights)</h3>

							<button className='btnPrimary'>Reserve or Book Now!</button>
						</div> {/* Details Price */}
					</div> {/* Details */}
				</div> {/* Container */}
			</section>

			<MailList />
		</main>

		<Footer />
	</div>
}
export default SingleHotel;