import styles from './game-selector.module.css';

function GameSelector({
	ids = [],
}) {
	return (
		<div className={styles.container}>
			{ids.join(',')}
		</div>
	);
}

export default GameSelector;
