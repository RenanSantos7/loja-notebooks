import styled from '@emotion/styled';

interface PaperProps {
	width?: number;
}

const Paper = styled.div<PaperProps>`
	width: ${props => (props.width ? `${props.width}px` : 'fit-content')};
	background-color: white;
	margin: auto;
	flex-direction: column;
	padding: 1.5rem;
	border-radius: 4px;
	box-shadow: var(--elevation1);
	gap: 1rem;
`;

export default Paper;
