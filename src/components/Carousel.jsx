import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const events = [
  { image: '/event1.jpg', link: 'https://docs.google.com/forms/d/e/1FAIpQLSeCOymfM1yK9sNIkdKtbAkZNFMqWho6DqITMRlZW4h_SVvSXQ/viewform' },
  { image: '/event2.jpg', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdqbwPuye412yXjYXEWYkb3oFQt-D6z-ur2MfwXA2cbAXDx6Q/viewform' },
  { image: '/event3.jpg', link: 'https://docs.google.com/forms/d/e/1FAIpQLSeD7ByHg5H8acbEjz3w4V_8-o9ZP8VAOWEQbtHGveNwvZ335A/viewform' , alt: 'Event 3' },
  { image: '/event4.png', link: 'https://docs.google.com/forms/d/e/1FAIpQLSfPWdDxfU9YA9BdJG-M3P6z3oUZuIZXiP9H8QGwNHKmJ2PYww/viewform' , alt: 'Event 4'},
  { image: '/event5.png', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdCbK3lPncZrm6bJW43_fqahcXOHw88R5qKMfV-yS6y8yEpig/viewform', alt: 'Event 5' },
  { image: '/event6.png', link: 'https://docs.google.com/forms/d/e/1FAIpQLSfvCMG8oUu1FCJSmK-exDx2X2SfqHPjge1huimQ5XQUCxfYEA/viewform?usp=sharing', alt: 'Event 6' },
  { image: '/event7.png', link: 'https://docs.google.com/forms/d/e/1FAIpQLSf2SGHcwx9oOaPeDUdb_JRsFGZvzIGwbWJrkKC2Dbyze6MrwQ/viewform?usp=sharing', alt: 'Event 7' },
  { image: '/event8.png', link: 'https://docs.google.com/forms/d/e/1FAIpQLSccn7cTCRZwUAAQRtBu5AMsYJSG8rYOipa_Kbb8tDtP29JY3Q/viewform?usp=sharing', alt: 'Event 8' },
  { image: '/event9.png', link: 'https://docs.google.com/forms/d/e/1FAIpQLSePvxWKCCBkdAYVkoADsAUQKt2x79iqvOMuXVsmgGhCxPFhxA/viewform?usp=sharing', alt: 'Event 9' },
  { image: '/event10.png', link: 'https://forms.gle/4', alt: 'Event 10' },
];

export default function Carousel() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="w-full"
    >
      {events.map((event, idx) => (
        <SwiperSlide key={idx}>
          <a href={event.link} target="_blank" rel="noreferrer">
            <img
              src={event.image}
              className="w-full h-[550px] object-cover rounded-lg shadow-md"
              alt={`Event ${idx + 1}`}
            />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
