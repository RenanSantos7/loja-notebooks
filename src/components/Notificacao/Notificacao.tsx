import styles from './Notificacao.module.css'
import Titulo4 from '../Titulos/Titulo4.tsx'
import Acoes from './types.ts'
import Acao from './Acao.tsx'

interface NotificacaoProps {
	titulo?: string
	mensagem: string
	acoes?: Acoes[]
}

export default function Notificacao({
	titulo,
	mensagem,
	acoes = ['ok'],
}: NotificacaoProps) {
	return (
		<article className={styles.container}>
			{titulo && <Titulo4>{titulo}</Titulo4>}
			
            <p>{mensagem}</p>

			{!!acoes.length && (
				<div className={styles.acoes}>
					{acoes.map((acao, i) => (
						<Acao acao={acao} key={i} />
					))}
				</div>
			)}
		</article>
	)
}
