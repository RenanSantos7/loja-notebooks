import { FaLaptopCode } from 'react-icons/fa';

interface LogoProps {
	size?: number;
	color: string;
}

export default function Logo({ size = 32, color }: LogoProps) {
	return <FaLaptopCode size={size} color={color} />;
}
