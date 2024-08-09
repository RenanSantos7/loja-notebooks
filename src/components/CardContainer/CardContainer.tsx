import { ReactNode } from 'react'
import { styled } from 'styled-components'
import Button from '../Button/Button.tsx'
import useCartContext from '../../hooks/useCartContext.tsx'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
`

export default function CardContainer({ children }: { children: ReactNode }) {
    
    const { resetCart } = useCartContext()
    
    return (
        <Container>
            {children}
            <Button
                variante='text'
                handleClick={resetCart}
            >Limpar Carrinho</Button>
        </Container>
    )
}
