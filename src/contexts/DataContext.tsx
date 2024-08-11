import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from 'react';
import { IProduct, IUser, LoginData } from '../types/types';

interface IDataContext {
	products: IProduct[];
	createProduct: (data: Omit<IProduct, 'id'>) => void;
	isModalOpened: boolean;
	setModalOpened: Dispatch<SetStateAction<boolean>>;
	registerUser: (data: IUser) => void;
	login: (data: LoginData) => void;
	deleteProduct: (id: number) => void;
	editProduct: (data: IProduct) => void;
	productToEdit: IProduct;
	setProductToEdit: Dispatch<SetStateAction<IProduct>>;
	selectProductToEdit: (id: number) => void;
	loading: boolean;
	token: string;
}

const DataContext = createContext<IDataContext>(null);

export default function DataProvider({ children }: { children: ReactNode }) {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [isModalOpened, setModalOpened] = useState(false);
	const [token, setToken] = useState('');
	const [productToEdit, setProductToEdit] = useState(null);
	const [loading, setLoading] = useState(false);

	function handleRegisterProduct(data: Omit<IProduct, 'id'>) {
		const ids = products.map(product => product.id);
		const lastId = ids.reduce((a, b) => Math.max(a, b), 0);
		const nextId = lastId + 1;
		const newProduct = { id: nextId, ...data };
		setProducts(prev => [...prev, newProduct]);
	}

	function selectProductToEdit(id: number) {
		setProductToEdit(products.find(item => item.id === id))
	}

	async function registerUser(data: IUser) {
		try {
			fetch('https://interview.t-alpha.com.br/api/auth/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: data.name,
					taxNumber: data.taxNumber,
					mail: data.mail,
					phone: data.phone,
					password: data.password,
				}),
			});
		} catch (error) {
			console.error('Erro na requisição:', error);
		}
	}

	async function login(data: LoginData) {
		try {
			const response = await fetch(
				'https://interview.t-alpha.com.br/api/auth/login',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						taxNumber: '12345678900',
						password: '123456',
					}),
				},
			);
			if (response.ok) {
				const data = await response.json();
				setToken(data.data.token);
			} else {
				console.error('Erro ao enviar dados:', response.statusText);
			}
		} catch (error) {
			console.error(error);
		}
	}

	async function getProducts() {
		if (!token) return;
		
		const options = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		};

		setLoading(true);

		try {
			const response = await fetch(
				'https://interview.t-alpha.com.br/api/products/get-all-products',
				options,
			);

			if (response.ok) {
				const data = await response.json();
				setProducts(data.data.products);
				setLoading(false);
			} else {
				throw new Error(
					`Erro na requisição dos produtos: ${response.status} ${response.statusText}`,
				);
			}
		} catch (error) {
			console.error('Erro ao buscar produtos:', error);
		}
	}

	async function createProduct(data: Omit<IProduct, 'id'>) {
		try {
			const response = await fetch(
				'https://interview.t-alpha.com.br/api/products/create-product',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({
						name: data.name,
						description: data.description,
						price: data.price,
						stock: data.stock,
					}),
				},
			);

			if (response.ok) {
				console.log('Dados enviados ao servidor com sucesso');
				handleRegisterProduct(data);
			} else {
				console.error('Erro ao enviar dados:', response.statusText);
			}
		} catch (error) {
			console.log('Erro ao criar produto:', error);
		}
	}

	async function deleteProduct(id: number) {
		try {
			const response = await fetch(
				`https://interview.t-alpha.com.br/api/products/delete-product/${id}`,
				{
					method: 'DELETE',
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);

			if (response.status === 200) {
				// const data = await response.json();
				// console.log(data);
				alert('Produto deletado');
				setProducts(prev => prev.filter(product => product.id !== id));
			} else {
				console.error('Erro ao deletar produto:', response.statusText);
				alert('Erro ao deletar Produto');
			}
		} catch (error) {
			console.log('Erro na requisição:', error);
		}
	}

	async function editProduct(data: IProduct) {
		try {
			const response = await fetch(
				`https://interview.t-alpha.com.br/api/products/update-product/${data.id}`,
				{
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						name: data.name,
						description: data.description,
						price: data.price,
						stock: data.stock,
					}),
				},
			);

			if (response.status === 200) {
				// const data = await response.json();
				// console.log(data);
				alert('Produto modificado');
				setProducts(prev =>
					prev.map(item =>
						item.id === data.id ? data : item,
					),
				);
				setProductToEdit(null);
			} else {
				console.error(
					'Erro ao modificar produto:',
					response.statusText,
				);
				alert('Erro ao modificar Produto');
			}
		} catch (error) {
			console.log('Erro na requisição:', error);
		}
	}

	useEffect(() => {
		getProducts();
	}, [token]);

	return (
		<DataContext.Provider
			value={{
				loading,
				products,
				createProduct,
				isModalOpened,
				setModalOpened,
				registerUser,
				login,
				deleteProduct,
				editProduct,
				productToEdit,
				setProductToEdit,
				selectProductToEdit,
				token
			}}
		>
			{children}
		</DataContext.Provider>
	);
}

export function useDataContext() {
	return useContext(DataContext);
}
