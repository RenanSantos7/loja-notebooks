import * as Yup from 'yup';

const productsSchema = Yup.object().shape({
    name: Yup.string()
        .min(5, 'Nome muito curto.')
        .required('Você precisa cadastrar um nome.'),
    description: Yup.string()
        .min(10, 'Descrição muita curta'),
    price: Yup.number()
        .min(10, 'Preço muito baixo')
        .required('Você precisa cadastrar um preço'),
    stock: Yup.number()
        .min(1, 'A quantidade mínima é 1')
        .required('Você precisa cadastrar a quantidade em estoque'),
});

export default productsSchema;