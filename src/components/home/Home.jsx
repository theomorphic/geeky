
import React from "react";
import "./home.css"
import Me from "../../assets/avatar-1.svg"
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home = ()=>{
	return(
		<section className="home container" id="home">
			<div className="intro">
				<img src={Me} alt="Misha Kaiser" className="home__img" />
				<h1 className="home__name">Misha Kaiser</h1>
				<span className="home__education">React developer</span>

				<HeaderSocials />

				<a href="#contact" className="btn">Contact Me</a>
			
				<ScrollDown />
			
			</div>
		</section>
	)
}

export default Home