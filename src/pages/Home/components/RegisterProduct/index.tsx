import { Button, Modal } from '@mui/material';
import { Form, Formik } from 'formik';
import { IoMdClose } from 'react-icons/io';

import { Title1 } from '../../../../components/tipografia';
import { useDataContext } from '../../../../contexts/DataContext';
import FlexLine from '../../../../components/FlexLine';
import InputField from '../../../../components/TextInput';
import Paper from '../../../../components/Paper';
import styles from './styles.module.css';

interface RegisterProductProps {}

export default function RegisterProduct(props: RegisterProductProps) {
	const { handleRegisterProduct, isModalOpened, setModalOpened } = useDataContext();

	return (
		<Modal open={isModalOpened} onClose={() => setModalOpened(false)}>
			<Paper width={500}>
				<FlexLine
					justifyContent='space-between'
					alignItems='flex-start'
					style={{ marginBottom: '1rem' }}
				>
					<Title1>Novo produto</Title1>
					<IoMdClose />
				</FlexLine>
				<Formik
					initialValues={{
						name: '',
						description: '',
						price: 0,
						stock: 0,
					}}
					onSubmit={(values, { setSubmitting }) => {
						console.log(values);
						handleRegisterProduct(values);
						setSubmitting(false);
						setModalOpened(false);
					}}
				>
					{formik => (
						<Form onSubmit={formik.handleSubmit}>
							<div className={styles.form}>
								<InputField
									name='name'
									label='Nome do produto'
								/>

								<InputField
									name='description'
									label='Descrição do produto'
								/>

								<InputField
									name='price'
									label='Preço'
									type='number'
								/>

								<InputField
									name='stock'
									label='Estoque'
									type='number'
								/>

								<Button
									type='submit'
									variant='contained'
									sx={{ alignSelf: 'flex-end', mt: 5 }}
								>
									Cadastrar
								</Button>
							</div>
						</Form>
					)}
				</Formik>
			</Paper>
		</Modal>
	);
}
