import './MailList.scss';

const MailList = () => {
	return <section className='mailListSection'>
		<h2 className='mailTitle'>Save time, save mony!</h2>

		<p className='mailDesc'>Sign up and we'll send the best deals to you</p>

		<div className='mailInputContainer'>
			<input type='text' placeholder='Your Email' />
			<button className='btnWhite'>Subscribe</button>
		</div>
	</section>
}
export default MailList;