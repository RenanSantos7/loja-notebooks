import Dashboard from './components/Dashboard';
import Header from './components/Header';
import RegisterProduct from './components/RegisterProduct';

export default function Home() {
	return (
		<div>
			<Header />
			<Dashboard />
			<RegisterProduct />
		</div>
	);
}
