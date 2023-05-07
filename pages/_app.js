import LayoutRoute from '../page-components/layout-route';

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
export default function App({ Component, pageProps }) {
	console.log('App Component', Component);

	const ComponentElement = (
		<Component
			{...pageProps}
			onNavigate={() => {
				console.log('onNavigate');
			}}
		/>
	);

	if (Component.isFullPage) {
		return Component.getLayout(ComponentElement);
	}

	return (
		<LayoutRoute>
			{ComponentElement}
		</LayoutRoute>
	);
}
