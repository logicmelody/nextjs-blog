import { useRouter } from 'next/router';

export default function LotteryStandardPage(props) {
	const router = useRouter();

	const {
		lotteryClassId,
		lotteryId,
	} = props;

	console.log('LotteryStandardPage props', props);
	console.log('LotteryStandardPage router', router);

	return (
		<div>
			<h1>
				官方玩法
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
