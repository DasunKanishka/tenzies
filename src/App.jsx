import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Screen from './components/Screen';
import './App.css';

const App = () => {
	return (
		<div id="app" className="app">
			<Header />

			<main>
				<Screen />
			</main>

			<Footer />
		</div>
	);
};

export default App;
