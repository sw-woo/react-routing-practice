import React from "react";
import { useParams } from "react-router-dom";

const ArticleModify = () => {
	const { idx } = useParams();
	console.log("파라메터 방식으로 URL을 통해 전달되는 값을 추출 합니다.", idx);
	return (
		<div>
			<h1>아티클 수정</h1>
		</div>
	);
};

export default ArticleModify;
