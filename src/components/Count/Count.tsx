import { styled } from 'styled-components'

interface CountProps {
	num: number
	children: React.ReactNode
}

const StyledDiv = styled.div`
	position: absolute;
	top: -15px;
	right: -15px;
	background-color: var(--warning);
	color: var(--azul2);
	font-size: 14px;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 50%;
	--tamanho: 24px;
	width: var(--tamanho);
	height: var(--tamanho);
`

export default function Count({ num, children }: CountProps) {
	return (
		<div style={{ position: 'relative' }}>
			{children}

			{!!num && <StyledDiv>{num}</StyledDiv>}
		</div>
	)
}
