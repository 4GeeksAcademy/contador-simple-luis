import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./card";
import Footer from "./footer";

import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./card";


const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
     	<div className="container">
            <Jumbotron/>
		<div className="center">
			<Card/>
		</div>
		<div className="footer">
			<Footer/>
		</div>

		</div>
		</div>
	);
};

export default Home;