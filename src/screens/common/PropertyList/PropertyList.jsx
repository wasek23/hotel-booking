import './PropertyList.scss';

const PropertyList = () => {
	return <section className='propertyListSection'>
		<div className='container'>
			<h2>Browse by property type</h2>

			<div className='propertyList'>
				<div className='property'>
					<img
						src='https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o='
						alt=''
					/>
					<div className='propertyContent'>
						<h3>Hotels</h3>
						<h4>233 hotels</h4>
					</div>
				</div> {/* Property */}

				<div className='property'>
					<img
						src='https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg'
						alt=''
					/>
					<div className='propertyContent'>
						<h3>Apartments</h3>
						<h4>2331 hotels</h4>
					</div>
				</div> {/* Property */}

				<div className='property'>
					<img
						src='https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg'
						alt=''
					/>
					<div className='propertyContent'>
						<h3>Resorts</h3>
						<h4>2331 hotels</h4>
					</div>
				</div> {/* Property */}

				<div className='property'>
					<img
						src='https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg'
						alt=''
					/>
					<div className='propertyContent'>
						<h3>Villas</h3>
						<h4>2331 hotels</h4>
					</div>
				</div> {/* Property */}

				<div className='property'>
					<img
						src='https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg'
						alt=''
					/>
					<div className='propertyContent'>
						<h3>Cabins</h3>
						<h4>2331 hotels</h4>
					</div>
				</div> {/* Property */}

			</div> {/* Property List */}
		</div> {/* Container */}
	</section>;
}
export default PropertyList;