
import React from "react";
import NavbarComponent from "./NavbarComponents";
import Jumbotron from "./Jumbotron";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<>
		<NavbarComponent/>
		<Jumbotron/>
		</>	
	);
};

export default Home;

