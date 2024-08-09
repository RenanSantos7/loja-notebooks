import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
} from 'react';
import { IProduct } from '../types/types';

interface IDataContext {
	products: IProduct[];
	setProducts: Dispatch<SetStateAction<IProduct[]>>;
}

export const DataContext = createContext<IDataContext>(null);

export default function DataProvider({ children }: { children: ReactNode }) {
	const [products, setProducts] = useState([]);

	return (
		<DataContext.Provider value={{ products, setProducts }}>
			{children}
		</DataContext.Provider>
	);
}
