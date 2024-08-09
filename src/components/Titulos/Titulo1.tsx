import { styled } from 'styled-components'
import TituloProps from './TituloProps.ts'

const Titulo = styled.h1`
	margin: 0;
	color: white;
	text-transform: capitalize;
	font-size: 5rem;
	font-family: 'Orbitron';
`

export default function Titulo1({ children }: TituloProps) {
	return <Titulo>{children}</Titulo>
}
