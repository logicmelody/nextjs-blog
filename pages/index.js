import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';

import { RouteKeyEnums } from '../route';
import { getSortedPostsData } from '../lib/posts';

const {
	LOGIN,
	POSTS,
	POSTS_FIRST_POST,
	THIRD_PARTY,
	LOTTERY,
} = RouteKeyEnums;

import utilStyles from '../styles/utils.module.css';

/*
https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation

By default, Next.js pre-renders pages using Static Generation without fetching data. Here's an example:

You should ask yourself: "Can I pre-render this page ahead of a user's request?" If the answer is yes, then you should choose Static Generation.
*/

/*
https://nextjs.org/docs/pages/building-your-application/rendering/automatic-static-optimization

During prerendering, the router's query object will be empty since we do not have query information to provide during this phase. After hydration, Next.js will trigger an update to your application to provide the route parameters in the query object.

The cases where the query will be updated after hydration triggering another render are:

// 簡單講就是會有 query object 產生的 page
- The page is a dynamic-route.
- The page has query values in the URL.
- Rewrites are configured in your next.config.js since these can have parameters that may need to be parsed and provided in the query.
*/
function HomePage(props) {
	const router = useRouter();

	const {
		title,
		allPostsData,
		onNavigate,
	} = props;

	console.log('HomePage props', props);
	console.log('HomePage router', router);
	console.log('HomePage title', title);
	console.log('HomePage allPostsData', allPostsData);

	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<section className={utilStyles.headingMd}>
				<p>[Your Self Introduction]</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>

			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`${POSTS}/${id}`}>{title}</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>

			<h2>
				Buttons
			</h2>

			<button onClick={() => {
				onNavigate(POSTS_FIRST_POST, {
					queryProps: {
						type: 100,
						hasTab: true,
						title: 'First Post from Home',
					},
				});
			}}>
				Go to First-Post with some props
			</button>

			<h2>
				Links
			</h2>

			{/* Any <Link /> in the viewport (initially or through scroll) will be prefetched by default (including the corresponding data) for pages using Static Generation. */}
			<Link href={LOGIN}>
				Login
			</Link>

			<br />

			<Link href={THIRD_PARTY}>
				Third Party
			</Link>

			<br />

			<Link href={`${THIRD_PARTY}/${1}/${2}/${3}`}>
				Third Party 1/2/3
			</Link>

			<br />

			<Link
				href={{
					pathname: `${THIRD_PARTY}/[...id]`,
					query: { id: ['99', '100'] },
				}}
			>
				Third Party with query 99/100
			</Link>

			<br />

			<Link href={`${LOTTERY}/${11}/${22}/standard`}>
				官方玩法
			</Link>

			<br />

			<Link href={`${LOTTERY}/${13}/${25}/xinyong`}>
				信用玩法
			</Link>
		</Layout>
	);
}

async function getStaticProps() {
	const allPostsData = getSortedPostsData();

	return {
		props: {
			title: 'HomePage',
			allPostsData,
		},
	};
}

export default HomePage;
export {
	getStaticProps,
};
