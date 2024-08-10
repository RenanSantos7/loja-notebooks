import { Form, Formik } from 'formik';
import Logo from '../../components/Logo';
import Paper from '../../components/Paper';
import { Title1 } from '../../components/tipografia';
import InputField from '../../components/TextInput';
import styles from './styles.module.css';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { LoginData } from '../../types/types';
import { useDataContext } from '../../contexts/DataContext';

export default function Login() {
	const navigate = useNavigate();

	const { login: handleLogin } = useDataContext();

	return (
		<Paper style={{ marginTop: '5rem' }} width={500}>
			<Logo style={{ alignSelf: 'center' }} color='#036bc0' />
			<Title1>Entre</Title1>
			<Formik
				initialValues={{
					taxNumber: '',
					password: '',
				}}
				onSubmit={values => {
					handleLogin(values);
					navigate('/');
				}}
			>
				{formik => (
					<Form onSubmit={formik.handleSubmit}>
						<div className={styles.form}>
                           <InputField
								name='taxNumber'
								label='Seu CPF'
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
                        
                        <p className={styles.msg}>Não possui login? <Link to='/cadastro' >Registre-se</Link></p>
					</Form>
				)}
			</Formik>
		</Paper>
	);
}
