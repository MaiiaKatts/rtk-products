import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ProductsState from './types/ProductsState';
import * as api from './api';
import Product from './types/Product';
import ProductData from './types/ProductData';

const initialState: ProductsState = {
	products: [],
	// error: '',
	toggle: false,
};

export const loadProducts = createAsyncThunk(
	'products/loadProducts', //это тип нашего action
	() => api.getAll() // payload - в данном случае Product[]
	// - то что возвращает api с раскрытым промисом
);

export const deleteProduct = createAsyncThunk(
	'products/deleteProduct', //это тип нашего action
	(id: number) => api.deleteProduct(id) // payload -  Product
	// - то что возвращает api с раскрытым промисом
);

export const createProduct = createAsyncThunk(
	'products/createProduct', //это тип нашего action
	(product: ProductData) => api.createProduct(product) // payload -  Product
	// - то что возвращает api с раскрытым промисом
);

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		changeToggleStatus: (state) => {
			state.toggle = !state.toggle;
		},
		chooseFavoriteProduct: (state, action: PayloadAction<Product>) => {
			state.favoriteProduct = action.payload;
		},
	},
	extraReducers: (builder) => {
		// это всегда одинаково
		builder // это всегда одинаково
			.addCase(loadProducts.fulfilled, (state, action) => {
				state.products = action.payload;
			})
			.addCase(deleteProduct.fulfilled, (state, action) => {
				state.products = state.products.filter(
					(product) => product.id !== action.payload.id
				);
			})
			.addCase(createProduct.fulfilled, (state, action) => {
				state.products.push(action.payload);
			});
	},
});

export default productsSlice.reducer;
// экспорт редюсера:
export const { changeToggleStatus, chooseFavoriteProduct } =
	productsSlice.actions; // экспорт функций reducers
