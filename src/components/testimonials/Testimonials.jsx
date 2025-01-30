

import React from "react";
import "./testimonials.css";
import Image1 from "../../assets/frank.webp";
import Image3 from "../../assets/yarman.webp";

import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const data = [
	{
	  id: 1,
	  image: Image3,
	  title: "Yarman",
	  subtitle: "Executive director at Good Drivers Company",
	  comment:
	    "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
	},
	{
	  id: 2,
	  image: Image1,
	  title: "Frank MacDonald",
	  subtitle: "Product manager at Amazon",
	  comment:
	    "I'm a big fan of this team. Y'all the best. Keep it up, folks. The project we've done together is top notch even for FFANG 👍",
	},
      ];

const Testimonials = ()=>{
	return(
		<section className="testimonials container section">
			<h2 className="section__title">Clients & Reviews</h2>
		
			<Swiper className="testimonials__container grid"
			modules={[Pagination]}
			spaceBetween={30}
			slidesPerView={1}
			loop={true}
			grabCursor={true}
			pagination={{ clickable: true }}
			>
				{data.map(({id, image, title, subtitle, comment}) =>{
					return(
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image} className="thumb__img"/>
							</div>

							<h3 className="testimonials__title">
								{title}
							</h3>
							<span className="subtitle">
								{subtitle}
							</span>
							<div className="comment">
								{comment}
							</div>
						</SwiperSlide>
					)
				})}
			</Swiper>

		
		</section>
	)
}

export default Testimonials