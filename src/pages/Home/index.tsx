import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDataContext } from '../../contexts/DataContext';
import Dashboard from './components/Dashboard';
import EditProduct from './components/EditProduct';
import Header from './components/Header';
import Loading from '../../components/Loading';
import RegisterProduct from './components/RegisterProduct';

export default function Home() {
	const { token } = useDataContext();
	const navigate = useNavigate();

	useEffect(() => {
		if (!(token.length > 0)) navigate('/login')
	}, [token]);

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
