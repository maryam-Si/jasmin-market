import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/homePage/HomePage.component";
import ShopPage from './pages/shop/ShopPage.component';
import Header from './components/header/header.component';
import "./pages/homePage/HomePage.Style.scss";
import { Route, Switch } from "react-router-dom";

const MenPage = () => (
	<div>
		<h1>men page</h1>
	</div>
);

const WomenPage = () => (
	<div>
		<h1>women page</h1>
	</div>
);

const GirlsPage = () => (
	<div>
		<h1>girls page</h1>
	</div>
);

const BoysPage = () => (
	<div>
		<h1>boys page</h1>
	</div>
);

const AccessoriesPage = () => (
	<div>
		<h1>accessories page</h1>
	</div>
);



function App() {
	return (
		<div>
			<Header/>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/men" component={MenPage} />
				<Route path="/women" component={WomenPage} />
				<Route path="/girls" component={GirlsPage} />
				<Route path="/boys" component={BoysPage} />
				<Route path="/accessories" component={AccessoriesPage} />
				<Route path="/shop" component={ShopPage}/>
				


			</Switch>
		</div>
	);
}

export default App;
