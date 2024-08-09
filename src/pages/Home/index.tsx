import Dashboard from './components/Dashboard';
import Header from './components/Header';

export default function Home() {
	return (
		<div style={{ flexDirection: 'column' }}>
			<Header />
			<Dashboard />
		</div>
	);
}
