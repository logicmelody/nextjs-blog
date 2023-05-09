import { useRouter } from 'next/router';
import Head from 'next/head';

import Layout from '../../../components/layout';
import Date from '../../../components/date';

import {
	getAllPostIds,
	getPostData,
} from '../../../lib/posts';

import styles from './posts.module.css';
import utilStyles from '../../../styles/utils.module.css';

export default function PostPage(props) {
	const router = useRouter();

	console.log('PostPage props', props);
	console.log('PostPage router', router);

	const {
		postData,
	} = props;

	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<h1>{`Title: ${router.query.id}`}</h1>
			<article className={styles.article}>
				<h1 className={utilStyles.headingXl}>{postData.title}</h1>
				<div className={utilStyles.lightText}>
					<Date dateString={postData.date} />
				</div>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</Layout>
	);
}

export async function getStaticPaths() {
	// 決定哪些 [id] 是合法的 dynamic route，如果遇到不合法的 id，會顯示 404 - Page Not Found
	const paths = getAllPostIds();

	return {
		paths,
		fallback: false,
	};
}

/*
You should not fetch an API Route from getStaticProps or getStaticPaths. Instead, write your server-side code directly in getStaticProps or getStaticPaths (or call a helper function).

https://nextjs.org/learn/basics/api-routes/api-routes-details
*/
export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);

	return {
		props: {
			postData,
		},
	};
}
