import styles from './people-group.module.scss'

export default function PeopleGroup() {
	return (
		<div className={styles.peopleGroup}>
			<img
				className={styles.peopleGroup__heart}
				src='/svgs/people-group/heart.svg'
				alt='Heart Picture'
			/>
			<img
				className={styles.peopleGroup__peoples}
				src='/images/people-group/peoples.webp'
				srcSet='
        /images/people-group/peoples-mob.webp 600w,
        /images/people-group/peoples.webp 601w
      '
				sizes='(max-width: 600px) 600px, (min-width: 601px) 601px'
				alt='Group of People'
			/>
		</div>
	)
}
