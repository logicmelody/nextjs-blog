import styles from './sidebar-menu.module.css';

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
