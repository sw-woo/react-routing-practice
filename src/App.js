import logo from "./logo.svg";
import "./App.css";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

//App.js 전체 페이지 레이아웃 구성 컴포넌트의 상단과 하단 선언
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";

//각종 웹페이지를 구성하는 페이지 컴포넌트 참조
import MainPage from "./pages/Main";
import ArticleList from "./pages/ArticleList";
import ArticleModify from "./pages/ArticleModify";
import ArticleRegist from "./pages/ArticleRegist";
import About from "./pages/About";
import CategoryListPage from "./pages/CategoryListPage";
import Company from "./pages/Company";
import Location from "./pages/Location";

function App() {
	return (
		<div className="App">
			<TopMenu></TopMenu>

			{/* 컨텐츠 영역에 표시할 컴포넌트 또는 페이지의 라우팅 주소체계별 화면 정의 */}
			<Routes>
				<Route path="/" Component={MainPage}></Route>

				{/** 상품분류 화면 표시할때 상품분류코드를 쿼리스트링방식으로 전달합니다.
				 * localhost:3000/category?cidx=100&sort=price
				 */}

				<Route path="/category" Component={CategoryListPage}></Route>

				<Route path="/article/list" Component={ArticleList}></Route>
				<Route path="/article/regist" Component={ArticleRegist}></Route>

				{/* localhost:3000/article/modify/1 */}
				<Route
					path="/article/modify/:idx"
					Component={ArticleModify}
				></Route>

				{/* localhost:3000/about/products */}
				<Route path="/company" Component={Company}>
					<Route path="location" Component={Location}></Route>
				</Route>
				<Route path="/about/:category" Component={About}></Route>
			</Routes>

			<Footer></Footer>
		</div>
	);
}

export default App;
