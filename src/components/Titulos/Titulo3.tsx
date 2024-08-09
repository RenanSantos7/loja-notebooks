import { styled } from 'styled-components'
import TituloProps from './TituloProps.ts'

const Titulo = styled.h3`
	color: var(--title-color);
	font-weight: 400;
	font-size: 1.8rem;
	margin-bottom: .5em;
`

export default function Titulo3({ children }: TituloProps) {
	return <Titulo>{children}</Titulo>
}
