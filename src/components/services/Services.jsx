

import React from "react";
import "./services.css"
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
	{
	  id: 1,
	  image: Image1,
	  title: "UI/UX design",
	  description:
	    "Engaging user interfaces that are both functional and aesthetically pleasing. Leveraging React's capabilities to ensure components are reusable, maintainable, and optimized for performance, enhancing the overall user experience.",
	},
	{
	  id: 2,
	  image: Image2,
	  title: "Web Development",
	  description:
	    "Adepting at both front-end and back-end technologies, ensuring robust, scalable, and secure websites or applications. Possessing a keen eye for design, strong problem-solving skills, and a commitment to staying updated with the latest web development trends and practices.",
	},
	{
	  id: 3,
	  image: Image3,
	  title: "Photography",
	  description:
	    "Having an exceptional eye for detail, composition, and light, capturing moments that tell a story or evoke emotion. Mastering both the technical aspects of photography and the creative process, whether working with digital or analog techniques.",
	},
      ];

const Services = ()=>{
	return <section className="services container section" id="services">
		<h2 className="section__title">Services</h2>

		<div className="services__container grid">
			{data.map(({id, image, title, description}) =>{
				return(
					<div className="services__card" key={{id}}>
						<img src={image} className="services__img" />

						<h3 className="services__title">{title}</h3>
						<p className="services__description">{description}</p>
					</div>
				)
			})}
		</div>

	</section>
}

export default Services