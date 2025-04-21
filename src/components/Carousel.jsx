import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const events = [
  { image: 'src/assets/event1.jpg', link: 'https://docs.google.com/forms/d/e/1FAIpQLSeCOymfM1yK9sNIkdKtbAkZNFMqWho6DqITMRlZW4h_SVvSXQ/viewform' },
  { image: 'src/assets/event2.jpg', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdqbwPuye412yXjYXEWYkb3oFQt-D6z-ur2MfwXA2cbAXDx6Q/viewform' },
  { image: 'src/assets/event3.jpg', link: 'https://docs.google.com/forms/d/e/1FAIpQLSeD7ByHg5H8acbEjz3w4V_8-o9ZP8VAOWEQbtHGveNwvZ335A/viewform' , alt: 'Event 3' },
  { image: 'src/assets/event4.png', link: 'https://forms.gle/4' , alt: 'Event 4'},
  { image: 'src/assets/event5.png', link: 'https://forms.gle/4', alt: 'Event 5' },
  { image: 'src/assets/event4.jpg', link: 'https://forms.gle/4', alt: 'Event 6' },
  { image: 'src/assets/event4.jpg', link: 'https://forms.gle/4', alt: 'Event 7' },
  { image: 'src/assets/event4.jpg', link: 'https://forms.gle/4', alt: 'Event 8' },
  { image: 'src/assets/event4.jpg', link: 'https://forms.gle/4', alt: 'Event 9' },
  { image: 'src/assets/event4.jpg', link: 'https://forms.gle/4', alt: 'Event 10' },
  { image: 'src/assets/event4.jpg', link: 'https://forms.gle/4', alt: 'Event 11' },
  { image: 'src/assets/event4.jpg', link: 'https://forms.gle/4', alt: 'Event 12' },
  { image: 'src/assets/event4.jpg', link: 'https://forms.gle/4', alt: 'Event 13' },
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
