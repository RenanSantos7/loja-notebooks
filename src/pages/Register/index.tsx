import { Form, Formik } from 'formik';
import Logo from '../../components/Logo';
import Paper from '../../components/Paper';
import { Title1 } from '../../components/tipografia';
import { IUser } from '../../types/types';
import InputField from '../../components/TextInput';
import styles from './styles.module.css';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDataContext } from '../../contexts/DataContext';

export default function Register() {
	const navigate = useNavigate();

	const { registerUser } = useDataContext();

	function handleRegister(data: Omit<IUser, 'id'>) {
		registerUser(data);
		navigate('/login');
	}

	return (
		<Paper style={{ marginTop: '5rem' }} width={500}>
			<Logo style={{ alignSelf: 'center' }} color='#036bc0' />
			<Title1>Registre-se</Title1>
			<Formik
				initialValues={{
					name: '',
					taxNumber: '',
					mail: '',
					phone: '',
					password: '',
				}}
				onSubmit={handleRegister}
			>
				{formik => (
					<Form onSubmit={formik.handleSubmit}>
						<div className={styles.form}>
                            <InputField
                                name='name'
                                label='Seu Nome'
                            />

							<InputField
								name='taxNumber'
								label='Seu CPF'
							/>

							<InputField
                                name='mail'
                                type='email'
								label='Seu e-mail'
							/>

							<InputField
								name='phone'
                                label='Seu telefone'
                                type='tel'
							/>

							<InputField
								name='password'
								type='password'
								label='Sua senha'
                            />
                            
                            <div className={styles.btnContainer}>
                                <Button
                                    variant='contained'
                                    type='submit'
                                >Cadastrar</Button>
                            </div>
                        </div>
                        
                        <p className={styles.msg}>Já possui login? <Link to='/login' >Entre</Link></p>
					</Form>
				)}
			</Formik>
		</Paper>
	);
}
