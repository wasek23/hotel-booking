import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus, faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

import './HotelList.scss';
import Header from '../common/Header/Header';
import Navbar from '../common/Header/Navbar';
import SearchItem from '../common/SearchItem/SearchItem';

const HotelList = () => {
	const location = useLocation();

	const [destination, setDestination] = useState(location.state.destination);
	const [isOpenDates, setIsOpenDates] = useState(false);
	const [dates, setDates] = useState(location.state.dates);
	const [options, setOptions] = useState(location.state.options);

	const onOptionChange = (name, operation) => setOptions(prev => ({
		...prev,
		[name]: 'i' === operation ? options[name] + 1 : options[name] - 1
	}));
	return <div className='hotelListPage'>
		<Navbar />
		<Header type='list' />

		<main className='hotelList'>
			<div className='container'>
				<div className='listSearch'>
					<h2 className='title'>Search</h2>

					<div className='searchField'>
						<label htmlFor='destination'>Destination</label>
						<input type='text' name='destination' id='destination' placeholder={destination} onChange={e => setDestination(e.target.value)} />
					</div>

					<div className='searchField'>
						<label>Check-in Date</label>
						<span onClick={() => setIsOpenDates(!isOpenDates)}>{`${format(dates[0].startDate, 'dd/MM/yy')} to ${format(dates[0].endDate, 'dd/MM/yy')}`}</span>

						{isOpenDates && <DateRange className='searchDates' ranges={dates} onChange={item => setDates([item.selection])} minDate={new Date()} />}
					</div>

					<div className='searchField searchOptions'>
						<label>Options</label>

						<div className='optItem'>
							<label className='optText'>Min Price <small>per night</small></label>

							<input className='optInput' type='number' />
						</div>

						<div className='optItem'>
							<label className='optText'>Max Price <small>per night</small></label>

							<input className='optInput' type='number' />
						</div>

						<OptionItem label='Adults' value={options.adults} onIncrease={() => onOptionChange('adults', 'd')} onDecrease={() => onOptionChange('adults', 'i')} disabledAt={1} />

						<OptionItem label='Children' value={options.children} onIncrease={() => onOptionChange('children', 'd')} onDecrease={() => onOptionChange('children', 'i')} disabledAt={0} />

						<OptionItem label='Room' value={options.room} onIncrease={() => onOptionChange('room', 'd')} onDecrease={() => onOptionChange('room', 'i')} disabledAt={1} />
					</div>

					<button className='btnPrimary'>Search</button>
				</div>

				<div className='listResult'>
					<SearchItem />
					<SearchItem />
					<SearchItem />
					<SearchItem />
					<SearchItem />
					<SearchItem />
					<SearchItem />
					<SearchItem />
				</div>
			</div>
		</main>
	</div>
}
export default HotelList;

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