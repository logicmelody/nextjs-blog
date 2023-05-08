import { useRouter } from 'next/router';

import GameSelector from '../../../page-components/third-party/game-selector';

import styles from './third-party.module.css';

function ThirdPartyPage(props) {
	const router = useRouter();

	console.log('ThirdPartyPage props', props);
	console.log('ThirdPartyPage router', router);

	const {
		onBack,
	} = props;

	const ids = router.query.id;

	// Example:
	// /third-party  {}
	// /third-party/a  { id: ['a'] }
	// /third-party/a/b  { id: ['a', 'b'] }
	// /third-party/a/b/c  { id: ['a', 'b', 'c'] }
	console.log('ThirdPartyPage router', router);

	function _renderContent() {
		if (!ids) {
			return 'Default Page';
		}

		return (
			<GameSelector
				ids={ids}
			/>
		);
	}

	return (
		<div>
			<h1>
				Third Party Page
			</h1>

			<button onClick={onBack}>
				回上一頁
			</button>

			<div className={styles.container}>
				{_renderContent()}
			</div>
		</div>
	)
}

export default ThirdPartyPage;
