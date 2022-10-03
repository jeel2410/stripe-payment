import { useState } from 'react';
import './App.css';
import StripeContainer from './components/StripeContainer';

function App() {
	const [showItem, setShowItem] = useState(false);
	return (
		<div className='App'>
			<StripeContainer />
		</div>
	);
}

export default App;
