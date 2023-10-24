import React from "react";
import { useSearchParams } from "react-router-dom";

const CategoryListPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const cidx = searchParams.get("cidx");
	const sort = searchParams.get("sort");

	return (
		<div>
			<h1>
				카테고리 리스트 페이지 입니다.{cidx}: 정렬방식{sort}
			</h1>
		</div>
	);
};

export default CategoryListPage;
