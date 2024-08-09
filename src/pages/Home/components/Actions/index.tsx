import { Button, Icon, Popover, styled } from '@mui/material';
import { useState } from 'react';
import { MdEdit, MdMoreVert, MdDelete } from 'react-icons/md';
import styles from './styles.module.css'

interface AcoesProps {
	id: number;
}

export default function Acoes({ id }: AcoesProps) {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	
	const handleClose = () => {
		setAnchorEl(null);
	};

	function handleEdit(id: number) {
		console.log(id)
	}

	return (
		<>
			<button className={styles.button} onClick={handleClick}>
				<MdMoreVert size={24} />
			</button>

			<Popover
				open={!!anchorEl}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
			>
				<div className={styles.container}>
					<Button
						onClick={() => handleEdit(id)}
						startIcon={<MdEdit />}
					>
						Editar
					</Button>
	
					<footer className={styles.footer}>
						<Button
							onClick={() => console.log('produto excluido')}
							startIcon={<MdDelete />}
							sx={{ color: '#d32f2f' }}
						>
							Excluir
						</Button>
					</footer>
				</div>
			</Popover>
		</>
	);
}
