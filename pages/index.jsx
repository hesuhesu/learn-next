import ProductHeader from '@/components/ProductHeader';
import ProductList from '@/components/ProductList';

function ProductPage() {
	const headerTitle = '상품 목록 페이지';
	return (
		<div>
			<ProductHeader title={headerTitle} />
			<ProductList />
		</div>
	);
}

export default ProductPage;
