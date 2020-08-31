import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/homePage/HomePage.component";
import ShopPage from './pages/shop/ShopPage.component';
import Header from './components/header/header.component';
import "./pages/homePage/HomePage.Style.scss";
import { Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn.component";
import {auth} from './firebase/firebase.utils';
import { from } from "rxjs";

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



class App extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			currentUser:null
		}
	}
	unsubcribeFromAuth = null;

	componentWillMount(){
		this.unsubcribeFromAuth = auth.onAuthStateChanged(user =>{
			this.setState({currentUser:user})
		});

	}

	componentWillUnmount(){
		this.unsubcribeFromAuth(); 
	}
	render(){
		return (
			<div>
				<Header currentUser={this.state.currentUser}/>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/men" component={MenPage} />
					<Route path="/women" component={WomenPage} />
					<Route path="/girls" component={GirlsPage} />
					<Route path="/boys" component={BoysPage} />
					<Route path="/accessories" component={AccessoriesPage} />
					<Route path="/shop" component={ShopPage}/>
					<Route path='/signIn' component={SignIn}/>
	
	
				</Switch>
			</div>
		); 
	}
	
}

export default App;
