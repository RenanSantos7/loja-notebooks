import { styled } from 'styled-components'
import mastercard from './mastercard.svg'
import visa from './visa.svg'
import mercadopago from './mercado-pago.svg'

const FlexContainer = styled.div`
    justify-self: end;
    display: flex;
    gap: 1.5rem;

    img {
        width: 50px;
        filter: saturate(0);

        &:hover {
            filter: none;
        }
    }
`

export default function Cartoes() {
    return (
        <FlexContainer>
            <img 
                src={visa} 
                alt="Cartão de crédito Visa"
                title="Cartão de crédito Visa"
            />
            <img 
                src={mastercard} 
                alt="Cartão de crédito Mastercard"
                title="Cartão de crédito Mastercard"
            />
            <img 
                src={mercadopago} 
                alt="Mercado Pago"
                title="Mercado Pago"
            />
        </FlexContainer>
    )
}
