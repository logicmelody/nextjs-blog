import LayoutRoute from '../layout-route';

function App({
	children,
}) {
	return (
		<LayoutRoute>
			{children}
		</LayoutRoute>
	);
}

export default App;
