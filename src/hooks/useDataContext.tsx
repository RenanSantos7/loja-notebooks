import { useContext } from 'react'
import { DataContext } from '../contexts/DataContext.tsx'

export default function useDataContext() {
	const dataContext = useContext(DataContext)
	return { ...dataContext }
}
