import { useRouter } from 'next/router';

function ThirdPartyGamePage() {
	const router = useRouter();

	console.log('ThirdPartyGamePage router', router);

	return (
		<div>
			Third Party Game Page
		</div>
	)
}

export default ThirdPartyGamePage;
