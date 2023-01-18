import { Swiper, SwiperSlide } from 'swiper/react';
import PlayIcon from '../../../../assets/icon/play.svg';
import 'swiper/css';
import { Link } from 'react-router-dom';

export default function Slider({ slider, handlePlayMusic }) {
    const sliderItems = slider ? slider.map((item, index) => (
        <SwiperSlide key={index}>
            <div className='slider-item'>
                <img
                     className="d-block w-100 img-blur"
                        src={item.image.slider.url}
                        alt="First slide"
                    />
                <Link to={`details/${item.id}`}>
                    <img
                        className="d-block img-top"
                        src={item.image.slider.url}
                        alt="First slide"
                    />
                </Link>
                <div className='slider-item_play'>
                    <h5>Listen</h5>
                    <button onClick={handlePlayMusic} id={item.id}>
                        <img id={item.id} src={PlayIcon} alt="" />
                    </button>
                </div>
            </div>
        </SwiperSlide>
    )) : null;

    return (
        <>
            <div className='slider'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={true}
                >
                    {slider && sliderItems}
                </Swiper>
            </div>
        </>
    )
}
