import {
    Button,
	Paper,
	styled,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { Title1 } from '../../../../components/tipografia';
import styles from './styles.module.css';
import { useDataContext } from '../../../../contexts/DataContext';
import Actions from '../Actions';
import formatCurrency from '../../../../utils/formatCcurrency';

const TableHeaderCell = styled(TableCell)(() => ({
	backgroundColor: '#036bc0',
	color: 'white',
}))

export default function Dashboard() {
	const { products, setModalOpened } = useDataContext();

	return (
		<div className={styles.container}>
			<Title1 style={{ paddingBlock: '1rem' }}>Dashboard</Title1>
            
            <div className={styles.btnContainer}>
				<Button
					variant='contained'
					onClick={() => setModalOpened(true)}
				>Novo produto</Button>
            </div>

			<TableContainer
				component={Paper}
				sx={{
					marginBlock: '1rem',
					scrollbarWidth: 'none',

					'::-webkit-scrollbar': {
						display: 'none',
					},
				}}
			>
				<Table>
					<TableHead>
						<TableRow>
						    <TableHeaderCell> </TableHeaderCell>
						    <TableHeaderCell>Nome</TableHeaderCell>
    						<TableHeaderCell>Descrição</TableHeaderCell>
    						<TableHeaderCell>Preço unitário</TableHeaderCell>
    						<TableHeaderCell>Estoque</TableHeaderCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{products.length ? (
							products.map(product => (
								<TableRow key={product.id} hover>
                                    <TableCell>
                                        <Actions id={product.id} />
                                    </TableCell>
									<TableCell>{product.name}</TableCell>
									<TableCell>{product.description}</TableCell>
									<TableCell>{formatCurrency(product.price)}</TableCell>
									<TableCell>{product.stock}</TableCell>
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={5}>Nenhum produto encontrado. Você precisa estar logado para visualizar os produtos.</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
            </TableContainer>
		</div>
	);
}
