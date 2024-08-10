import Dashboard from './components/Dashboard';
import Header from './components/Header';
import RegisterProduct from './components/RegisterProduct';

export default function Home() {
	return (
		<div style={{ flexDirection: 'column' }}>
			<Header />
			<Dashboard />
			<RegisterProduct />
		</div>
	);
}
