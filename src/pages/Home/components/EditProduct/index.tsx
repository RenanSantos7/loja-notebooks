import { Button, Modal } from '@mui/material';
import { Form, Formik } from 'formik';
import { IoMdClose } from 'react-icons/io';

import { Title1 } from '../../../../components/tipografia';
import { useDataContext } from '../../../../contexts/DataContext';
import FlexLine from '../../../../components/FlexLine';
import InputField from '../../../../components/TextInput';
import Paper from '../../../../components/Paper';
import styles from './styles.module.css';
import productsSchema from '../../../../schemas/products.schema';

export default function EditProduct() {
	const { editProduct, productToEdit, setProductToEdit } = useDataContext();

	return (
		<Modal open={!!productToEdit} onClose={() => setProductToEdit(null)}>
			<Paper width={500}>
				<FlexLine
					justifyContent='space-between'
					alignItems='flex-start'
					style={{ marginBottom: '1rem' }}
				>
					<Title1>Novo produto</Title1>
					<button onClick={() => setProductToEdit(null)}>
						<IoMdClose />
					</button>
				</FlexLine>
				<Formik
					initialValues={{
						name: productToEdit ? productToEdit.name : '',
						description: productToEdit ? productToEdit.description : '',
						price: productToEdit ? productToEdit.price : 0,
						stock: productToEdit ? productToEdit.stock : 0,
					}}
					onSubmit={(values, { setSubmitting }) => {
						console.log(values);
						editProduct({id: productToEdit.id, ...values});
						setSubmitting(false);
						setProductToEdit(null);
					}}
					validationSchema={productsSchema}
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
									Salvar
								</Button>
							</div>
						</Form>
					)}
				</Formik>
			</Paper>
		</Modal>
	);
}
