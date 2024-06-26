import DialogTitle from '@mui/material/DialogTitle'
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import { useModalStore } from '../../store/signup'
import { SignUpFormValues } from '../../types/signup-form'
import Button, { ButtonType } from '../shared/button/button'
import Modal from '../shared/modal/modal'
import styles from './signup-modal.module.scss'

export default function SignUpModal() {
	const { isOpen, closeModal, closeFirstOpenSecond } = useModalStore()

	const validationSchema = Yup.object({
		email: Yup.string()
			.email('Please enter a valid e-mail')
			.required('Email is required'),
		password: Yup.string()
			.min(8, 'Password must be at least 8 characters')
			.required('Password is required'),
	})

	const handleSubmit = async (
		values: SignUpFormValues,
		{ setSubmitting, setErrors }: FormikHelpers<SignUpFormValues>
	) => {
		try {
			const response = await fetch('https://api.dating.com/identity', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: values.email,
					password: values.password,
				}),
			})

			console.log(response)

			if (!response.ok) {
				const errorData = await response.json()
				setErrors({ submit: errorData.message || 'An error occurred' })
			} else {
				const responseData = await response.text()
				if (responseData.trim() !== '') {
					const jsonData = JSON.parse(responseData)
					console.log('Response data:', jsonData)
					closeFirstOpenSecond()
				} else {
					console.error('Empty JSON response')
					setErrors({ submit: 'Empty JSON response' })
				}
			}
		} catch (error) {
			console.error('Error:', error)
			setErrors({ submit: 'An error occurred' })
		} finally {
			setSubmitting(false)
		}
	}

	return (
		<Modal onClose={closeModal} className={styles.signupModal} open={isOpen}>
			<div className={styles.signupModal__overlay}>
				<DialogTitle className={styles.signupModal__title}>
					To register, enter the mail to which our news is sent and set your
					password
				</DialogTitle>
				<Formik
					initialValues={{ email: '', password: '' }}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({ isSubmitting, errors, touched }) => (
						<Form className={styles.modalForm} method='PUT' noValidate>
							<div className={styles.modalForm__field}>
								<Field
									type='email'
									id='email'
									name='email'
									placeholder='Example@email.com'
									className={`${styles.modalForm__input} ${
										errors.email && touched.email
											? styles.modalForm__borderError
											: ''
									}`}
								/>
								{errors.email && touched.email && (
									<img
										src='/images/shared/error-icon.png'
										className={styles.modalForm__errorIcon}
										alt='Error icon'
									/>
								)}
								<ErrorMessage
									name='email'
									component='p'
									className={styles.modalForm__error}
								/>
							</div>
							<div className={styles.modalForm__field}>
								<Field
									type='password'
									id='password'
									name='password'
									placeholder='Password'
									className={`${styles.modalForm__input} ${
										errors.password && touched.password
											? styles.modalForm__borderError
											: ''
									}`}
								/>
								{errors.password && touched.password && (
									<img
										src='/images/shared/error-icon.png'
										className={styles.modalForm__errorIcon}
										alt='Error icon'
									/>
								)}
								<ErrorMessage
									name='password'
									component='p'
									className={styles.modalForm__error}
								/>
							</div>
							{errors.submit && (
								<p className={styles.modalForm__errorServer}>{errors.submit}</p>
							)}
							<Button
								className={styles.modalForm__submit}
								type={'submit'}
								content={'submit'}
								buttonType={ButtonType.Signup}
								disabled={isSubmitting}
							/>
						</Form>
					)}
				</Formik>
			</div>
			<button
				className={styles.signupModal__close}
				type='button'
				onClick={closeModal}
			>
				<img
					className={styles.signupModal__cross}
					src='/svgs/shared/cross.svg'
					alt='Close modal button icon'
				/>
			</button>
		</Modal>
	)
}
