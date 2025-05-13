import React from 'react'
import './styles/Section3.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
const Section3 = () => {

    const slideClasses = [
        's3_sl_1',
        's3_sl_2',
        's3_sl_3',
        's3_sl_4'
    ]
    return (
        <section className='sc3'>
            <div className="inner">
                <div className="t-wrap">
                    <h2 className="con_tit">
                        Month's item
                    </h2>
                    <p className="txt">
                        유연하지만 견고하게,<br/>나만의 다채로운 아름다움을 발굴하는 헤라의 뷰티 루틴
                    </p>
                    <a href="#" className="con_btn blue">
                        자세히 보기
                    </a>
                </div>
                <div className="s3_sl_wrap">
                    <div className="in">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 2
                                }
                            }}
                        >
                            {slideClasses.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className={slide}>{index}</div>
                                </SwiperSlide>

                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3