import { useRouter } from 'next/router';

import AppComponent from '../page-components/app';

import TestProvider from '../lib/test-provider';

/*
根據官方文件:

you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.
*/
import '../styles/global.css';

/*
The Component prop is the active page, so whenever you navigate between routes, Component will change to the new page. Therefore, any props you send to Component will be received by the page.

pageProps is an object with the initial props that were preloaded for your page by one of our data fetching methods, otherwise it's an empty object.
*/
// <Component {...pageProps} /> 可以看成 {renderSwitches(routes)}
function App({ Component, pageProps }) {
	const router = useRouter();

	console.log('App Component', Component);
	console.log('App router', router);

	function _handleOnNavigate(path, options = { queryProps: {} }) {
		console.log('App onNavigate');

		router.push({
			pathname: path,

			// 需要用 query object 來傳 data 到下一個 page
			query: options.queryProps,
		});
	}

	function _handleOnBack() {
		router.back();
	}

	return (
		<TestProvider>
			<AppComponent>
				<Component
					{...pageProps}
					{...router.query} // TODO: 是否需要考慮 isReady
					onNavigate={_handleOnNavigate}
					onBack={_handleOnBack}
				/>
			</AppComponent>
		</TestProvider>
	);
}

export default App;
