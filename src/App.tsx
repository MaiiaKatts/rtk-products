import Home from './components/Home/Home';
import { Counter } from './features/counter/Counter';
import './App.css';
import ProductsBox from './features/products/ProductsBox';
import ProductCreationForm from './features/products/ProductCreationForm';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';

function App(): JSX.Element {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="counter" element={<Counter />} />
				<Route path="productCreationForm" element={<ProductCreationForm />} />
				<Route path="productsBox" element={<ProductsBox />} />
			</Route>
		</Routes>
	);
}

export default App;
