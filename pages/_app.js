import LayoutRoute from '../page-components/layout-route';

/*
根據官方文件:

you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.
*/
import '../styles/global.css';

// <Component {...pageProps} /> 可以看成 {renderSwitches(routes)}
export default function App({ Component, pageProps }) {
	return (
		<LayoutRoute>
			<Component {...pageProps} />
		</LayoutRoute>
	);
}
