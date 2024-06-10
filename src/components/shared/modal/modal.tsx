import { Dialog } from '@mui/material'
import { ModalProps } from '../../../types/shared/modal'

export default function Modal({
	children,
	onClose,
	className,
	open,
}: ModalProps) {
	return (
		<Dialog
			className={className}
			open={open}
			onClose={onClose}
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
			{children}
		</Dialog>
	)
}
