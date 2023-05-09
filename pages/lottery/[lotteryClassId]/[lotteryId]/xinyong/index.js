import { useRouter } from 'next/router';

export default function LotteryXinyongPage(props) {
	const router = useRouter();

	const {
		lotteryClassId,
		lotteryId,
	} = props;

	console.log('LotteryXinyongPage props', props);
	console.log('LotteryXinyongPage router', router);

	return (
		<div>
			<h1>
				信用玩法
			</h1>

			<div>
				{`lotteryClassId = ${lotteryClassId}`}
			</div>

			<br />

			<div>
				{`lotteryId = ${lotteryId}`}
			</div>
		</div>
	);
}
