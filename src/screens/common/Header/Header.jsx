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

const Header = ({ type }) => {
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
	}));

	console.log(options);

	return <header className={`header ${'list' === type ? 'listHeader' : ''}`}>
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

			{'list' !== type && <>
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

						{isOpenDates && <DateRange className='searchDates' ranges={dates} onChange={item => setDates([item.selection])} minDate={new Date()} editableDateInputs={true} moveRangeOnFirstSelection={false} />}
					</div> {/* Search Dates */}

					<div className='searchField'>
						<FontAwesomeIcon className='searchIcon' icon={faPerson} />

						<span className='searchText' onClick={() => setIsOpenOptions(!isOpenOptions)}>
							{`${options.adults} adults - ${options.children} children - ${options.room} room`}
						</span>

						{isOpenOptions && <div className='searchOptions'>
							<OptionItem label='Adults' value={options.adults} onIncrease={() => onOptionChange('adults', 'd')} onDecrease={() => onOptionChange('adults', 'i')} disabledAt={1} />

							<OptionItem label='Children' value={options.children} onIncrease={() => onOptionChange('children', 'd')} onDecrease={() => onOptionChange('children', 'i')} disabledAt={0} />

							<OptionItem label='Room' value={options.room} onIncrease={() => onOptionChange('room', 'd')} onDecrease={() => onOptionChange('room', 'i')} disabledAt={1} />
						</div>}
					</div> {/* Search Options */}

					<button className='btnPrimary searchBtn' onClick={() => navigate('/hotels', { state: { destination, dates, options } })}>Search</button>
				</div> {/* Search */}
			</>}
		</div> {/* Container */}
	</header>
}
export default Header;

const OptionItem = ({ label, value, onIncrease, onDecrease, disabledAt }) => {
	return <div className='optItem'>
		<label className='optText'>{label}</label>

		<button className='optCounter' onClick={onIncrease} disabled={value <= disabledAt}>
			<FontAwesomeIcon className='searchIcon' icon={faSquareMinus} />
		</button>

		<span className='optCount'>{value}</span>

		<button className='optCounter' onClick={onDecrease}>
			<FontAwesomeIcon className='searchIcon' icon={faSquarePlus} />
		</button>
	</div>
}