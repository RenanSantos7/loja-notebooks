import styles from './Acao.module.css'
import Button from '../Button/Button.tsx'
import Acoes from './types.ts'
import useDataContext from '../../hooks/useDataContext.tsx'

interface AcaoProps {
	acao: Acoes
}

type Variante = '' | 'apagado' | 'outlined' | 'text'

export default function Acao({ acao }: AcaoProps) {
	const { setNotificando } = useDataContext()

	let variante: Variante
    let aoClicar: () => void
    let texto: string

	switch (acao) {
        case 'ok':
            texto = 'OK'
            variante = ''
            aoClicar = () => setNotificando(false)
            break
        case 'cancel':
            texto = 'Cancelar'
            variante = 'text'
            aoClicar = () => setNotificando(false)
            break
	}

	return (
		<Button variante={variante} handleClick={aoClicar}>
			{texto}
		</Button>
	)
}
