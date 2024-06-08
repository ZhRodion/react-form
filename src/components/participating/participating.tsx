import { useModalStore } from '../../store/signup'
import { ParticipatingListProps } from '../../types/participating'
import PeopleGroup from '../people-group/people-group'
import Button, { ButtonType } from '../shared/button/button'
import SignUpModal from '../signup-modal/signup-modal'
import ThankYouModal from '../thank-you-modal/thank-you-modal'
import styles from './participating.module.scss'

export const PARTICIPATE_DATA: ParticipatingListProps[] = [
	{
		id: 1,
		digit: '1.',
		content: 'Subscribe to our News',
	},
	{
		id: 2,
		digit: '2.',
		content: 'Sign Up',
	},
	{
		id: 3,
		digit: '3.',
		content: 'Check your email inbox ',
	},
	{
		id: 4,
		digit: '4.',
		content: 'Wait till September 22',
	},
]

export default function Participating() {
	const { openModal } = useModalStore()
	let signUpContent: JSX.Element | null = null

	const signUpItem = PARTICIPATE_DATA.find(item => item.content === 'Sign Up')

	if (signUpItem) {
		signUpContent = (
			<Button
				type={'button'}
				content={'Sign Up'}
				onClick={() => openModal()}
				buttonType={ButtonType.Signup}
			/>
		)
	}

	return (
		<section className={styles.participating}>
			<div
				className={`${styles.participating__container} ${'container-narrow'}`}
			>
				<PeopleGroup />
				<div className={styles.participatingContent}>
					<h1 className={styles.participatingContent__title}>
						How to Participate
					</h1>
					<ul className={styles.participatingList}>
						{PARTICIPATE_DATA.map(({ id, digit, content }) => (
							<li className={styles.participatingList__item} key={id}>
								<b className={styles.participatingList__digit}>{digit}</b>
								{content === 'Sign Up' ? (
									signUpContent
								) : (
									<p className={styles.participatingList__textContent}>
										{content}
									</p>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
			<SignUpModal />
			<ThankYouModal />
		</section>
	)
}
