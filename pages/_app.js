import SidebarMenu from '../components/sidebar-menu';

/*
根據官方文件:

you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.
*/
import '../styles/global.css';

export default function App({ Component, pageProps }) {
	return (
		<SidebarMenu>
			<Component {...pageProps} />
		</SidebarMenu>
	);
}
