import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext.tsx'

export default function useCartContext() {
	const cartContext = useContext(CartContext)
	return { ...cartContext }
}
