// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

export default function Layout(): JSX.Element {
	return (
		<>
			<header>important part</header>
			<Navbar />
			<Outlet />
			<footer>what should i write here?</footer>
		</>
	);
}
