import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "../../styles/Testimonials.css"
import testimonialsData from "../../assets/data/testimonials.json"

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="section-title">Words from Our Pack</h2>
      <Swiper
        loop={true}
        speed={3000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={10}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="testimonials-slider"
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <img src={testimonial.img} alt={testimonial.name} className="testimonial-img" loading="lazy" />
            <div className="testimonial-overlay">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <span className="testimonial-author">- {testimonial.name}</span>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </section>
  )
}

export default Testimonials
