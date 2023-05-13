import styles from './sidebar-menu.module.sass';

// Sass example
// https://sass-lang.com/guide
function SidebarMenu({
	children,
}) {
	return (
		<div className={styles.container}>
			<div className={styles.menu}>
				Menu
			</div>

			<div className={styles.content}>
				{children}
			</div>
		</div>
	);
}

export default SidebarMenu;
