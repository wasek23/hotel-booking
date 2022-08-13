import './SearchItem.scss';

const SearchItem = () => {
	return <div className='searchItem'>
		<img src='https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1' alt='' />

		<div className='description'>
			<h2 className='title'>Tower Street Apartments</h2>
			<span className='distance'>500m from center</span>
			<span className='taxiOpt'>Free airport taxi</span>
			<span className='subtitle'>Studio Apartment with Air conditioning</span>
			<span className='features'>Entire studio • 1 bathroom • 21m² 1 full bed</span>
			<span className='cancelOpt'>Free cancellation</span>
			<span className='cancelOptSubtitle'>You can cancel later, so lock in this great price today!</span>
		</div>

		<div className='details'>
			<div className='rating'>
				<span>Excellent</span>
				<button>8.9</button>
			</div>

			<div className='detailTexts'>
				<span className='price'>$112</span>
				<span className='taxOpt'>Includes taxes and fees</span>
				<button className='btnPrimary checkButton'>See availability</button>
			</div>
		</div>
	</div>
}
export default SearchItem;