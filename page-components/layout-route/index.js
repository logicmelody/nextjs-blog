import {
	useState,
	useEffect,
} from 'react';
import { useRouter } from 'next/router';

import SidebarMenu from '../../components/sidebar-menu';

import { RouteKeyEnums } from '../../route';

const {
	LOGIN,
} = RouteKeyEnums;

const OmitPaths = [
	LOGIN,
];

function LayoutRoute({ children }) {
	const router = useRouter();

	// Simulate login
	const [isAuthed, setIsAuthed] = useState(true);

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setIsAuthed(true);

	// 	}, 3000);

	// }, []);

	function _renderPublicLayout() {
		return (
			<div>
				{children}
			</div>
		);
	}

	function _renderPrivateLayout() {
		return (
			<SidebarMenu>
				{children}
			</SidebarMenu>
		);
	}

	if (checkIsOmitPath(router.pathname)) {
		return _renderPublicLayout();
	}

	return _renderPrivateLayout();
}

function checkIsOmitPath(pathname = '') {
	const filteredOmitPaths = OmitPaths
		.filter(omitPath => pathname.indexOf(omitPath) > -1);

	return filteredOmitPaths.length > 0;
}

export default LayoutRoute;
