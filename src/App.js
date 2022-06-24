import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './app.scss';
import Home from './screens/Home/Home';
import HotelList from './screens/Hotel/HotelList';
import SingleHotel from './screens/Hotel/SingleHotel';

const App = () => {
	return <BrowserRouter>
		<Routes>
			<Route path='/hotels' element={<HotelList />} />
			<Route path='/hotels/:id' element={<SingleHotel />} />
			<Route path='/' element={<Home />} />
		</Routes>
	</BrowserRouter>;
}
export default App;