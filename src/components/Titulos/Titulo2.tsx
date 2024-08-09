import { styled } from 'styled-components'
import TituloProps from './TituloProps.ts'

const Titulo = styled.h2`
	color: var(--title-color);
	text-align: center;
	margin-block: 3rem 1.5rem;
	font-weight: 300;
	font-size: 2.2rem;
`

export default function Titulo2({ children }: TituloProps) {
	return <Titulo>{children}</Titulo>
}
