import {
	useState,
	useEffect,
} from 'react';

import SidebarMenu from '../../components/sidebar-menu';

function LayoutRoute({ children }) {
	const [isAuthed, setIsAuthed] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsAuthed(true);

		}, 3000);

	}, []);

	function _renderPublicLayout() {
		return (
			<div>
				isAuthed = false
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

	return isAuthed ? _renderPrivateLayout() : _renderPublicLayout();
}

export default LayoutRoute;
