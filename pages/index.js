import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';

import { getSortedPostsData } from '../lib/posts';

import utilStyles from '../styles/utils.module.css';

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
							<Link href={`/posts/${id}`}>{title}</Link>
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
				onNavigate('/posts/first-post', {
					queryProps: {
						id: 100,
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
			<Link href='/login'>
				Login
			</Link>

			<br />

			<Link href='/third-party'>
				Third Party
			</Link>

			<br />

			<Link href={`/third-party/${1}/${2}/${3}`}>
				Third Party 1/2/3
			</Link>

			<br />

			<Link
				href={{
					pathname: '/third-party/[...id]',
					query: { id: ['99', '100'] },
				}}
			>
				Third Party with query 99/100
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
