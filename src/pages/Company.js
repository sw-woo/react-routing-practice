import React from "react";
import { Outlet } from "react-router-dom";

const Company = () => {
	return (
		<div>
			<div>
				<h1>회사소개페이지</h1>
				<p>배우며 성장하는 it 교육 기업입니다.</p>
			</div>
			<Outlet />
		</div>
	);
};

export default Company;
