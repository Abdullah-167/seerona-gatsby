import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Next from '../../images/nextslide.svg'
import Previous from '../../images/previousslide.svg'
import Image from '../../images/image1.svg'
import Image2 from '../../images/image2.svg'
import Image3 from '../../images/image3.svg'
import Image4 from '../../images/image4.svg'
// import '../../styles/style.scss'
export default () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        breakpoints: {
            "(min-width: 400px)": {
                slides: { perView: 1 },
            },
            "(min-width: 800px)": {
                slides: { perView: 2 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 3, spacing: 10 },
            },
        },
        slides: { perView: 1 },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <>
            <div className="">
                <div ref={sliderRef} className="keen-slider">
                    <div className='choisissez-main'>
                        {cards.map((item, index) => {
                            return (
                                <div className='keen-slider__slide  choisissez' key={index}>
                                    <div className='choisissez-img'>
                                        <img src={item.img} alt="icon" />
                                    </div>
                                    <p>{item.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {loaded && instanceRef.current && (
                    <>
                        <div className='slides-img'>
                            <span>
                                <img
                                    left
                                    onClick={(e) =>
                                        e.stopPropagation() || instanceRef.current?.prev()
                                    }
                                    disabled={currentSlide === 0}
                                    src={Previous} alt="next" />
                            </span>
                            <span
                                onClick={(e) =>
                                    e.stopPropagation() || instanceRef.current?.next()
                                }
                                disabled={
                                    currentSlide ===
                                    instanceRef.current.track.details.slides.length - 1
                                }
                            >
                                <img src={Next} alt="next" />
                            </span>
                        </div>
                    </>
                )}
            </div>
            {loaded && instanceRef.current && (
                <div className="dots">
                    {[
                        ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            ></button>
                        )
                    })}
                </div>
            )}
        </>
    )
}



const cards = [
    {
        img: Image,
        title: 'Lors d’un appel de 15min, vous nous transmettez vos accès plateforme et vos remises.'
    },
    {
        img: Image2,
        title: 'Lors d’un appel de 15min, vous nous transmettez vos accès plateforme et vos remises.'
    }, {
        img: Image3,
        title: 'Lo3rs d’un appel de 15min, vous nous transmettez vos accès plateforme et vos remises.'
    }, {
        img: Image4,
        title: 'Lors d’un appel de 15min, vous nous transmettez vos accès plateforme et vos remises.'
    },
]