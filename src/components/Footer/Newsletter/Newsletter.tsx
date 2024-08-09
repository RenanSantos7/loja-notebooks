import styles from './Newsletter.module.css'

export default function Newsletter() {
	return (
		<div className={styles.newsletter}>
			<p className={styles.text}>Inscreva-se na nossa newsletter e tenha os melhores preços todo dia em seu email!</p>
			<form className={styles.form}>
				<input
					type='email'
					title='newsletter'
					placeholder='Cadastre seu e-mail em nossa newsletter'
				/>
				<button type="submit">Cadastrar</button>
			</form>
		</div>
	)
}
