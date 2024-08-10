import { createBrowserRouter } from 'react-router-dom';
import Base from './pages/Base.tsx';
import Home from './pages/Home/index.tsx';
import Register from './pages/Register/index.tsx';
import Login from './pages/Login/index.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Base />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'cadastro',
				element: <Register />,
			},
			{
				path: 'login',
				element: <Login />,
			},
		],
	},
]);

export default router;
