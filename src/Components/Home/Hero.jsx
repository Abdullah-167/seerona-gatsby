import React from 'react'
import Button from '../Button'
import '../../styles/hero.scss'

const Hero = () => {
    return (
        <div>
            <div>
                <h1 className='hero-heading'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> <span className='libre primary-text'> Lorem ipsum </span>
                </h1>
                <p className='hero-para'>Des remises commerciales respectées <br />
                    avec nos <span>outils d’achat spécialisés à l’officine. </span></p>
            </div>
            <div className='hero-5x'>
                {counting.map((item, index) => {
                    return (
                        <div key={index}>
                            <h3 className='primary-text'>{item.title}</h3>
                            <p>{item.para}</p>
                        </div>
                    )
                })}
            </div>
            <div className='hero-btn-flex'>
                <div>
                    <Button text={'Estimez votre régulation'} padding={'20px 47px'} background={'#3F3BEF'} color={'white'} fontWeight={'700'} />
                </div>
                <div className=''>
                    <Button
                        text={'Estimez votre régulation'}
                        padding={'18px 47px'}
                        background={'transparent'}
                        color={'black'}
                        fontWeight={'700'}
                        border={'#000000'}
                        borderWidth={'2px'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero


const counting = [
    {
        title: '5x',
        para: 'ROI garanti'
    },
    {
        title: '1k+',
        para: 'heures économisées '
    }, {
        title: '30k€',
        para: 'en régulation '
    },
]