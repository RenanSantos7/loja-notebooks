import classNames from 'classnames';
import styles from './styles.module.css';
import { useField } from 'formik';
import FlexLine from '../FlexLine';

interface TextInputProps {
	label: string;
	name: string;
	type?: 'text' | 'number' | 'email' | 'tel' |'password' | 'textarea';
}

export default function InputField({
	name,
	label = name,
	type = 'text',
	...props
}: TextInputProps) {
	const [field, { error, touched }] = useField(name);

	if (type === 'textarea') {
		return (
			<label className={styles.container}>
				<FlexLine>
					<span className={styles.label}>{label}</span>
					{error && touched && (
						<span className={styles.errorMsg}>{error}</span>
					)}
				</FlexLine>
				<textarea
					name={name}
					className={classNames(styles.input, styles.textarea)}
					{...field}
					{...props}
				/>
			</label>
		);
	}

	return (
		<label className={styles.container}>
			<FlexLine>
				<span className={styles.label}>{label}</span>
				{error && touched && (
					<span className={styles.errorMsg}>{error}</span>
				)}
			</FlexLine>
			<input
				type={type ? type : 'text'}
				name={name}
				className={styles.input}
				{...field}
				{...props}
			/>
		</label>
	);
}
