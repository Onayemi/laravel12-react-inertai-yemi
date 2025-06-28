import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-flip'; // Import Cube effect CSS
import 'swiper/css/navigation';
import { Autoplay, EffectFlip, Navigation } from 'swiper/modules'; //EffectCube
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Banner() {
    return (
        <Swiper
            className="group relative"
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
                nextEl: '.button-next-slide',
                prevEl: '.button-prev-slide',
            }}
            modules={[Navigation, Autoplay, EffectFlip]} //EffectCube
            autoplay={{
                delay: 10000, // Time in ms between slides (e.g., 10 seconds)
                disableOnInteraction: false, // Keep autoplay running even after user interaction
                pauseOnMouseEnter: true,
            }}
            loop={true} // Recommended for continuous autoplay
        >
            <SwiperSlide>
                <div className="image relative">
                    {/* Assuming 'img' tag will have 'src' and 'alt' attributes */}
                    <div className="block">
                        <img src="/image/bn1.png" className="w-[1920px] md:h-[450px] lg:h-[550px]" alt="Description of image" />
                        {/* <div className="title-content lg:space-y- absolute top-[25%] left-[4rem] space-y-3">
                            <h3 className="text-[16px]">More Luxury & Trending</h3>
                            <h3 className="text-[40px] font-bold lg:text-[50px]">Wood Cup of Tea</h3>
                            <p className="text-[14px] md:w-[80%] lg:w-[40%]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua.
                            </p>
                            <button className="rounded-4xl bg-[#333] p-2 px-[2rem] text-[13px] text-white lg:rounded-4xl">Shop Now</button>
                        </div> */}
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="image relative">
                    {/* Assuming 'img' tag will have 'src' and 'alt' attributes */}
                    <div className="block">
                        <img src="/image/bn2.png" className="w-[1920px] md:h-[450px] lg:h-[550px]" alt="Description of image" />
                        {/* <div className="title-content absolute top-[25%] left-[4rem] space-y-5">
                            <h3 className="text-[16px]">More Luxury & Trending</h3>
                            <h3 className="text-[50px] font-bold">Wood Cup of Tea</h3>
                            <p className="w-[40%] text-[14px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua.
                            </p>
                            <button className="bg-[#333] p-2 px-[2rem] text-[13px] text-white">Shop Now</button>
                        </div> */}
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="image relative">
                    {/* Assuming 'img' tag will have 'src' and 'alt' attributes */}
                    <div className="block">
                        <img src="/image/bn1.png" className="w-[1920px] md:h-[450px] lg:h-[550px]" alt="Description of image" />
                        {/* <div className="title-content absolute top-[25%] left-[4rem] space-y-5">
                            <h3 className="text-[16px]">More Luxury & Trending</h3>
                            <h3 className="text-[50px] font-bold">Wood Cup of Tea</h3>
                            <p className="w-[40%] text-[14px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua.
                            </p>
                            <button className="bg-[#333] p-2 px-[2rem] text-[13px] text-white">Shop Now</button>
                        </div> */}
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="image relative">
                    {/* Assuming 'img' tag will have 'src' and 'alt' attributes */}
                    <div className="block">
                        <img src="/image/bn2.png" className="w-[1920px] md:h-[450px] lg:h-[550px]" alt="Description of image" />
                        {/* <div className="title-content absolute top-[25%] left-[4rem] space-y-5">
                            <h3 className="text-[16px]">More Luxury & Trending</h3>
                            <h3 className="text-[50px] font-bold">Wood Cup of Tea</h3>
                            <p className="w-[40%] text-[14px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua.
                            </p>
                            <button className="bg-[#333] p-2 px-[2rem] text-[13px] text-white">Shop Now</button>
                        </div> */}
                    </div>
                </div>
            </SwiperSlide>

            <div className="button-prev-slide absolute top-[50%] -left-[23rem] z-10 grid h-[40px] w-[40px] place-items-center bg-[#000] text-white duration-500 group-hover:left-0">
                <FaArrowLeft />
            </div>
            <div className="button-next-slide absolute top-[50%] -right-[23rem] z-10 grid h-[40px] w-[40px] place-items-center bg-[#000] text-white duration-500 group-hover:right-0">
                <FaArrowRight />
            </div>
        </Swiper>
    );
}
