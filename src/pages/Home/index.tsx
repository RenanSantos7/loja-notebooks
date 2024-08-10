import Loading from '../../components/Loading';
import Dashboard from './components/Dashboard';
import EditProduct from './components/EditProduct';
import Header from './components/Header';
import RegisterProduct from './components/RegisterProduct';

export default function Home() {
	return (
		<div>
			<Header />
			<Dashboard />
			<RegisterProduct />
			<EditProduct />
			<Loading />
		</div>
	);
}
