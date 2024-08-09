import { Outlet, ScrollRestoration } from 'react-router-dom'
import PageHeader from '../components/PageHeader/PageHeader.tsx'
import PageFooter from '../components/Footer/Footer.tsx'
import Notificacao from '../components/Notificacao/Notificacao.tsx'
import useDataContext from '../hooks/useDataContext.tsx'

export default function Base() {
	const { notificando } = useDataContext()

	return (
		<>
			<PageHeader />
			<Outlet />
			<PageFooter />
			{notificando && (
				<Notificacao
					titulo='Notificacao'
					mensagem='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
					acoes={['ok', 'cancel']}
				/>
			)}
			<ScrollRestoration />
		</>
	)
}
