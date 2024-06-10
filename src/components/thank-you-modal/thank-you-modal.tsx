import DialogTitle from '@mui/material/DialogTitle'
import { useModalStore } from '../../store/signup'
import Modal from '../shared/modal/modal'
import styles from './thank-you-modal.module.scss'

export default function ThankYouModal() {
	const { isSecondModalOpen, closeSecondModal } = useModalStore()

	return (
		<Modal
			className={styles.thankYouModal}
			open={isSecondModalOpen}
			onClose={closeSecondModal}
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
		</Modal>
	)
}
