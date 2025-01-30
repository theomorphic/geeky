
import React from 'react'

const AboutBox = () => {
  return (
	<div className="about__boxes grid">
		<div className="about__box">
			<i className="about__icon icon-fire"></i>
			<div>

				<h3 className="about__title">34</h3>
				<span className="about__subtitle">Project completed</span>
			</div>
		</div>

		<div className="about__box">
			<i className="about__icon icon-cup"></i>
			<div>

				<h3 className="about__title">2532</h3>
				<span className="about__subtitle">Cup of coffee</span>
			</div>
		</div>

		<div className="about__box">
			<i className="about__icon icon-people"></i>
			<div>

				<h3 className="about__title">143</h3>
				<span className="about__subtitle">Satisfied clients</span>
			</div>
		</div>

		<div className="about__box">
			<i className="about__icon icon-badge"></i>
			<div>

				<h3 className="about__title">21</h3>
				<span className="about__subtitle">Nominees winner</span>
			</div>
		</div>
	</div>
  )
}

export default AboutBox
