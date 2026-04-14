import React, { ReactElement, useCallback, useMemo, useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { LoadingIndicator } from '../components/loading-indicator/loading-indicator';
import { ErrorMessage } from '../components/error-message/error-message';
import { ProductList } from '../components/product-list/product-list';

export type SortKey = 'annualFee' | 'rating';

export const ProductsPage = (): ReactElement => {
	const { products, loading, error } = useProducts();
	const [search, setSearch] = useState<String>('ALL');
	const [sortKey, setSortKey] = useState<SortKey>('annualFee');
	const [favorites, setFavorites] = useState<Set<string>>(new Set());

	const toggleFavorite = useCallback(() => {});

	const filteredAndSorted = useMemo(() => {});

	return (
		<>
			<h1>Product List</h1>
			loading && <LoadingIndicator></LoadingIndicator>
			!loading && error && <ErrorMessage></ErrorMessage>
			!loading && !error && <ProductList products={filteredAndSorted}></ProductList>
		</>
	);
};
