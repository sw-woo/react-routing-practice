import React from "react";
import { useNavigate } from "react-router-dom";

const ArticleRegist = () => {
	const navigate = useNavigate();

	const handleSave = () => {
		//게시글 입력정보를 벡엔드로 전송합니다.
		navigate("/article/list");
	};

	return (
		<div>
			<h1>아티클 등록</h1>
			제목:
			<input type="text" />
			<br />
			내용:<textarea></textarea>
			<br />
			<button onClick={handleSave}>저장</button>
			<button
				onClick={() => {
					navigate("/");
				}}
			>
				메인이동
			</button>
		</div>
	);
};

export default ArticleRegist;
