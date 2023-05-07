import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

import Layout from '../../../components/layout';

import style from './first-post.module.css';

export default function FirstPostPage(props) {
	const router = useRouter();

	console.log('FirstPostPage props', props);
	console.log('FirstPostPage router', router);

	return (
		<Layout>
			<Head>
				<title>First Post</title>
				<script src='https://connect.facebook.net/en_US/sdk.js' />
			</Head>

			<Script
				src='https://connect.facebook.net/en_US/sdk.js'
				strategy='lazyOnload'
				onLoad={() =>
					console.log(`script loaded correctly, window.FB has been populated`)
				}
			/>

			<h1 className={style.title}>First Post</h1>

			<h2>
				<Link href='/'>Back to home</Link>
			</h2>
		</Layout>
	);
}
