// 有辦法 disable CSS Module
// https://stackoverflow.com/questions/67934463/how-to-turn-off-css-module-feature-in-next-js
import styles from './layout.module.css';

export default function Layout({ children }) {
	return (
		<div className={styles.container}>
			{children}
		</div>
	);
}
