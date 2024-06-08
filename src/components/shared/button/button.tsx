import styles from './button.module.scss'

export enum ButtonType {
	Signup = 'signup',
	Default = 'default',
}

interface ButtonProps {
	type: 'button' | 'submit' | 'reset'
	content: string
	onClick?: () => void
	className?: string
	buttonType: ButtonType
	additionalClass?: string
	disabled?: any
}

export default function Button({
	type,
	content,
	onClick,
	className,
	buttonType,
	additionalClass,
	disabled,
}: ButtonProps) {
	const btnClassName = `${className || ''} ${
		buttonType === ButtonType.Signup
			? styles.signupButton
			: styles.defaultButton
	} ${styles[additionalClass || '']}`

	return (
		<button
			className={btnClassName}
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{content}
		</button>
	)
}
