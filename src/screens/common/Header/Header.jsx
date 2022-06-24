import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCar, faPlane, faTaxi, faPerson, faSquarePlus, faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // date range main css file
import 'react-date-range/dist/theme/default.css'; // date range theme css file

import './header.scss';

const Header = () => {
	const navigate = useNavigate();

	const [destination, setDestination] = useState('');
	const [isOpenDates, setIsOpenDates] = useState(false);
	const [dates, setDates] = useState([{
		startDate: new Date(),
		endDate: new Date(),
		key: 'selection'
	}]);
	const [isOpenOptions, setIsOpenOptions] = useState(false);
	const [options, setOptions] = useState({
		adults: 1,
		children: 0,
		room: 1
	});

	const onOptionChange = (name, operation) => setOptions(prev => ({
		...prev,
		[name]: 'i' === operation ? options[name] + 1 : options[name] - 1
	}))

	return <header className='header'>
		<div className='container'>
			<ul className='list'>
				<li className='listItem active'>
					<FontAwesomeIcon icon={faBed} />
					<span>Stays</span>
				</li>

				<li className='listItem'>
					<FontAwesomeIcon icon={faPlane} />
					<span>Flights</span>
				</li>

				<li className='listItem'>
					<FontAwesomeIcon icon={faCar} />
					<span>Car rentals</span>
				</li>

				<li className='listItem'>
					<FontAwesomeIcon icon={faBed} />
					<span>Attractions</span>
				</li>

				<li className='listItem'>
					<FontAwesomeIcon icon={faTaxi} />
					<span>Airport taxis</span>
				</li>
			</ul> {/* List */}

			<div className='content'>
				<h1 className='title'>A lifetime of discounts? It's Genius.</h1>

				<p className='description'>Get rewarded for your travels - unlock instant savings of 10% or more with a free Lamabooking account</p>

				<button className='btnWhite'>Sign in / Register</button>
			</div> {/* Content */}

			<div className='search'>
				<div className='searchField'>
					<FontAwesomeIcon className='searchIcon' icon={faBed} />
					<input className='searchInput' type='text' placeholder='Where are you going?' onChange={e => setDestination(e.target.value)} />
				</div> {/* Search Destination */}

				<div className='searchField'>
					<FontAwesomeIcon className='searchIcon' icon={faCalendarDays} />

					<span className='searchText' onClick={() => setIsOpenDates(!isOpenDates)}>
						{`${format(dates[0].startDate, 'dd/MM/yy')} to ${format(dates[0].endDate, 'dd/MM/yy')}`}
					</span>

					{isOpenDates && <DateRange className='searchDates' ranges={dates} onChange={item => setDates([item.selection])} editableDateInputs={true} moveRangeOnFirstSelection={false} />}
				</div> {/* Search Dates */}

				<div className='searchField'>
					<FontAwesomeIcon className='searchIcon' icon={faPerson} />

					<span className='searchText' onClick={() => setIsOpenOptions(!isOpenOptions)}>
						{`${options.adults} adults - ${options.children} children - ${options.room} room`}
					</span>

					{isOpenOptions && <div className='searchOptions'>
						<div className='optItem'>
							<span className='optText'>Adults</span>
							<button className='optCounter' onClick={() => onOptionChange('adults', 'd')} disabled={options.adults <= 1}>
								<FontAwesomeIcon className='searchIcon' icon={faSquareMinus} />
							</button>
							<span className='optCount'>{options.adults}</span>
							<button className='optCounter' onClick={() => onOptionChange('adults', 'i')}>
								<FontAwesomeIcon className='searchIcon' icon={faSquarePlus} />
							</button>
						</div>

						<div className='optItem'>
							<span className='optText'>Children</span>
							<button className='optCounter' onClick={() => onOptionChange('children', 'd')} disabled={options.children <= 0}>
								<FontAwesomeIcon className='searchIcon' icon={faSquareMinus} />
							</button>
							<span className='optCount'>{options.children}</span>
							<button className='optCounter' onClick={() => onOptionChange('children', 'i')}>
								<FontAwesomeIcon className='searchIcon' icon={faSquarePlus} />
							</button>
						</div>

						<div className='optItem'>
							<span className='optText'>Room</span>
							<button className='optCounter' onClick={() => onOptionChange('room', 'd')} disabled={options.room <= 1}>
								<FontAwesomeIcon className='searchIcon' icon={faSquareMinus} />
							</button>
							<span className='optCount'>{options.room}</span>
							<button className='optCounter' onClick={() => onOptionChange('room', 'i')}>
								<FontAwesomeIcon className='searchIcon' icon={faSquarePlus} />
							</button>
						</div>
					</div>}
				</div> {/* Search Options */}

				<button className='btnPrimary searchBtn' onClick={() => navigate('/hotels', { state: { destination, dates, options } })}>Search</button>
			</div> {/* Search */}
		</div> {/* Container */}
	</header>
}
export default Header;