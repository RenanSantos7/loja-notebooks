import classNames from 'classnames';
import styles from './styles.module.css';

interface TextInputProps {
	label: string;
	name: string;
	multiline?: boolean;
	type?: 'text' | 'number';
}

export default function InputField(props: TextInputProps) {
	if (props.multiline) {
		return (
			<label className={styles.container}>
				<span className={styles.label}>{props.label}</span>
				<textarea
					name={props.name}
					className={classNames(styles.input, styles.textarea)}
				/>
			</label>
		);
	}

	return (
		<label className={styles.container}>
			<span className={styles.label}>{props.label}</span>
			<input
				type={props.type ? props.type : 'text'}
				name={props.name}
                className={styles.input}
			/>
		</label>
	);
}
