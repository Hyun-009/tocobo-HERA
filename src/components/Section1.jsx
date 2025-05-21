import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './styles/Section1.scss'
const Section1 = () => {

  useEffect(() => {

    Aos.init({ duration: 1000 })

  }, [])


  return (
    <section className='sc1'>
      <div className="inner">
        <div className="img-wrap" data-aos="fade-right">
          <img src="./img/20240108_final_KR-ROUGE-CLASSY-SEOUL-RED_gnb-banner.png" alt="intro" />
        </div>
        <div className="t-wrap" data-aos="fade-left">
          <p className="txt_1">
            COLOR DETAILS
          </p>
          <h2 className="con_tit">
            #303 POPPY
          </h2>
          <p className="txt">
            루즈 클래시<br/>
            ROUGE CLASSY<br/>
            3.5g<br/>
            세련된 컬러와 고급스러운 글로우가 입술에 정교하고 편안하게 밀착되는 클래식 립스틱
          </p>
          <a href="#" className="con_btn">자세히 보기</a>
        </div>
      </div>
    </section>
  )
}

export default Section1