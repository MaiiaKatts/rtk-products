import { useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
	selectFavoriteProduct,
	selectProducts,
	selectToggle,
} from './selectors';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
	changeToggleStatus,
	chooseFavoriteProduct,
	deleteProduct,
	loadProducts,
} from './productsSlice';

export default function ProductsBox(): JSX.Element {
	const products = useAppSelector(selectProducts);
	const toggle = useAppSelector(selectToggle);
	const favoriteProduct = useAppSelector(selectFavoriteProduct);
	const dispatch = useAppDispatch();

	function handleDelete(id: number): void {
		void dispatch(deleteProduct(id));
	}

	return (
		<div>
			<h1>Products Box</h1>
			<h2>Favorite product: </h2>
			{!favoriteProduct && <p>Product not selected</p>}
			<p>
				{favoriteProduct?.title} {favoriteProduct?.description}
			</p>
			<div
				style={
					toggle ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
				}
			>
				STATUS
			</div>
			{/* чтобы поменять значение централизованого состояния:  */}
			<button type="button" onClick={() => dispatch(changeToggleStatus())}>
				Change status of the toggle
			</button>
			<h2>All products: </h2>
			{products.map((product) => (
				<li key={product.id}>
					{product.title}
					<FavoriteIcon
						onClick={() => dispatch(chooseFavoriteProduct(product))}
					/>
					<button
						type="button"
						onClick={() => dispatch(deleteProduct(product.id))}
					>
						Delete
					</button>
				</li>
			))}
		</div>
	);
}
