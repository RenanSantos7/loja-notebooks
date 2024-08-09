import { styled } from 'styled-components'
import TituloProps from './TituloProps.ts'

const Titulo = styled.h4`
	color: var(--title-color);
	font-weight: 500;
	font-size: 1.35rem;
	margin-bottom: .5em;
`

export default function Titulo4({ children }: TituloProps) {
	return <Titulo>{children}</Titulo>
}
