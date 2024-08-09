import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useState,
} from 'react';
import { IProduct } from '../types/types';

interface IDataContext {
	products: IProduct[];
	setProducts: Dispatch<SetStateAction<IProduct[]>>;
}

const produtos = [
	{
		id: 738,
		name: 'Lenovo Yoga 100',
		description: 'Notebook para trabalho',
		price: 3000.5,
		stock: 20,
	},
	{
		id: 740,
		name: 'Samsung Galaxy Book 3 360',
		description: 'Notebook que vira um tablet',
		price: 7250,
		stock: 20,
	},
	{
		id: 741,
		name: 'Mackbook Pro M2',
		description: 'O notebook mais potente da Apple',
		price: 18650,
		stock: 10,
	},
];

const DataContext = createContext<IDataContext>(null);

export default function DataProvider({ children }: { children: ReactNode }) {
	const [products, setProducts] = useState<IProduct[]>(produtos);

	return (
		<DataContext.Provider value={{ products, setProducts }}>
			{children}
		</DataContext.Provider>
	);
}

export function useDataContext() {
	return useContext(DataContext);
}
