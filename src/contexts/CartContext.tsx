import { ReactNode, SetStateAction, createContext, useState } from 'react'
import CartItem from '../types/CartItem.ts'

interface ShoppingCartItem {
	id: number
	quantidade: number
}

interface IContext {
	shoppingCart: ShoppingCartItem[]
	setShoppingCart: React.Dispatch<SetStateAction<ShoppingCartItem[]>>
	addToCart: (id: number) => void
	resetCart: () => void
}

export const CartContext = createContext<IContext>(null)
CartContext.displayName = 'Carrinho'

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [shoppingCart, setShoppingCart] = useState([])

	function addToCart(idProduto: number) {
		if (!shoppingCart.some(produto => produto.id === idProduto)) {
			setShoppingCart(prev => [...prev, new CartItem(idProduto, 1)])
		} else {
			setShoppingCart(prev =>
				prev.map(produtoNoCarrinho => {
					if (produtoNoCarrinho.id === idProduto) {
						produtoNoCarrinho.incrementar()
					}
					return produtoNoCarrinho
				})
			)
		}
	}

	function resetCart() {
		setShoppingCart([])
	}

	return (
		<CartContext.Provider
			value={{
				shoppingCart,
				setShoppingCart,
				addToCart,
				resetCart,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
