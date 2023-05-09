import { useRouter } from 'next/router';

export default function PostDetailPage(props) {
	const router = useRouter();

	console.log('PostTestPage props', props);
	console.log('PostTestPage router', router);

	return <></>;
}
