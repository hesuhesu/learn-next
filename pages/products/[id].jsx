import ProductHeader from '@/components/ProductHeader';
import React from 'react';
import axios from 'axios';

export default function ProductDetailPage({ message, productInfo }) {
	const headerTitle = '상품 상세 페이지';

	return (
		<div>
			<ProductHeader title={headerTitle} />
			<p>{productInfo.name}</p>
			<p>{productInfo.price}$</p>
			<div>ProductDetailPage {message}</div>
		</div>
	);
}

export async function getServerSideProps(context) {
	console.log(context.params.id);
	const id = context.params.id;
	const response = await axios.get(`http://localhost:4000/products/${id}`);

	return {
		props: { message: '서버에서 준 메세지', productInfo: response.data },
	};
}
