import "swiper/css";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper/modules";

import Javed2 from "./images/javed/Javed2.jpeg";
import Javed3 from "./images/javed/Javed3.jpeg";
import Javed4 from "./images/javed/Javed4.jpeg";
import Javed5 from "./images/javed/Javed5.jpeg";
import Javed6 from "./images/javed/Javed6.jpeg";
import Javed7 from "./images/javed/Javed7.jpeg";
import Javed8 from "./images/javed/Javed8.jpeg";
import Javed9 from "./images/javed/Javed9.jpeg";
import Javed10 from "./images/javed/Javed10.jpeg";
import Javed11 from "./images/javed/Javed11.jpeg";
import Javed12 from "./images/javed/Javed12.jpeg";
import Javed13 from "./images/javed/Javed13.jpeg";
import Javed14 from "./images/javed/Javed14.jpeg";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "700"],
});

export default function Gallery() {
  return (
    <section>
      <div className="mt-20">
        <p className={`text-5xl pl-10 ${outfit.className}`}>Gallery</p>

        <div className="h-[60vh] mt-10" id="swiper">
          <Swiper
            spaceBetween={50}
            slidesPerView={6}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <Image className="rounded-lg" src={Javed2} alt="Javed 2" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="rounded-lg" src={Javed4} alt="Javed 4" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="rounded-lg" src={Javed14} alt="Javed 14" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="rounded-lg" src={Javed6} alt="Javed 6" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="rounded-lg" src={Javed7} alt="Javed 7" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="rounded-lg" src={Javed5} alt="Javed 5" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="rounded-lg" src={Javed8} alt="Javed 8" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="rounded-lg" src={Javed3} alt="Javed 3" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="rounded-lg" src={Javed9} alt="Javed 9" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="rounded-lg" src={Javed10} alt="Javed 10" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="rounded-lg" src={Javed12} alt="Javed 12" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="rounded-lg" src={Javed11} alt="Javed 11" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="rounded-lg" src={Javed13} alt="Javed 13" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
