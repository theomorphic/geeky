
import React from "react";
import "./about.css"
import avatar2 from "../../assets/pfp-2.webp";
import AboutBox from "./AboutBox";

const About = ()=>{
	return(
		<section className="about container section" id="about">
			<h2 className="section__title">About Me</h2>

			<div className="about__container grid">
				<img src={avatar2} alt="Misha Kaiser" className="about__img"/>
			
			
			<div className="about__data grid">
				<div className="about__info">
					<p className="about__description">I'm a software engineer that admires beautiful design and delicious coffee ☕ Trying my best to keep it elegant and useful.</p>
					<a className="btn">Download CV</a>
				</div>

				<div className="about__skills grid">
					<div className="skills__data">
						<div className="skills_titles">
							<h3 className="skills__name">Development</h3>
							<span className="skills__number">95%</span>
						</div>

						<div className="skills__bar">
							<span className="skills__percentage development"></span>
						</div>
					</div>

					<div className="skills__data">
						<div className="skills_titles">
							<h3 className="skills__name">UI/UX design</h3>
							<span className="skills__number">80%</span>
						</div>

						<div className="skills__bar">
							<span className="skills__percentage ui__design"></span>
						</div>
					</div>

					<div className="skills__data">
						<div className="skills_titles">
							<h3 className="skills__name">Photography</h3>
							<span className="skills__number">70%</span>
						</div>

						<div className="skills__bar">
							<span className="skills__percentage photography"></span>
						</div>
					</div>
				</div>
			</div>
			
			</div>

			<AboutBox />
		</section>
	)
}

export default About