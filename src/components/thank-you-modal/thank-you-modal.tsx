import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import { useModalStore } from '../../store/signup'
import styles from './thank-you-modal.module.scss'

export default function ThankYouModal() {
	const { isSecondModalOpen, closeSecondModal } = useModalStore()

	return (
		<Dialog
			className={styles.thankYouModal}
			open={isSecondModalOpen}
			onClose={closeSecondModal}
			sx={{
				'& .MuiModal-backdrop': {
					backdropFilter: 'blur(15px)',
					background: 'rgba(255, 255, 255, 0.8)',
				},
				'& .MuiDialog-paper': {
					width: '100%',
					maxWidth: '1179px',
					padding: '0 45px',
					boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
					borderRadius: '50px',

					'@media (max-width: 992px)': {
						borderRadius: '20px',
					},

					'@media (max-width: 600px)': {
						padding: '0 5px',
						margin: '21px',
					},
				},
			}}
		>
			<div className={styles.thankYouModal__overlay}>
				<DialogTitle className={styles.thankYouModal__title}>
					Thank You
				</DialogTitle>
				<b className={styles.thankYouModal__text}>
					To complete registration, please check your e-mail
				</b>
				<button
					className={styles.thankYouModal__close}
					type='button'
					onClick={closeSecondModal}
				>
					<img
						className={styles.thankYouModal__cross}
						src='/svgs/shared/cross.svg'
						alt='Close modal button icon'
					/>
				</button>
			</div>
		</Dialog>
	)
}
