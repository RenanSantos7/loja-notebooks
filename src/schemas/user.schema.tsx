import * as Yup from 'yup';

const userSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Nome muito curto')
        .required('Nome obrigatório'),
	taxNumber: Yup.string()
		.matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'CPF inválido')
		.required('Você precisa informar seu CPF'),
	mail: Yup.string()
		.email('E-mail inválido')
		.required('E-mail obrigatório'),
	phone: Yup.string()
		.matches(/\d{2}9?\d{8}/,'Telefone inválido. Verifique se digitou todos os dígitos, incuindo o DDD.')
		.required('É necessário fornecer um número telefone.'),
	password: Yup.string()
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*-_¬;\.])$/,
			'Sua senha deve ter letras minúsculas e maiúsculas, números e um caractere especial',
		)
		.min(8, 'Sua senha deve ter pelo menos 8 caracteres')
		.max(16, 'Sua senha pode ter no máximo 16 caracteres')
		.required('Você não cadastrou sua senha'),
});

export default userSchema;