import React from 'react'
import Tick from '../../images/tick.svg'
import Money from '../../images/money.png'
import Button from '../Button'
import '../../styles/nous.scss'

const Nous = () => {
    return (
        <div className='conaitner'>
            <div className='nous-main'>
                <div>
                <h1 className='nous-heading'>Nous analysons et <span className='libre primary-text'> vérifions </span> vos remises, tirer avantage de :</h1>
                    <div>
                        {data.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className='nous-title'>
                                        <img src={item.img} alt='tick' />
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                            )
                        })}
                        <div className='nous-btn'>
                            <Button text={'Estimez votre régulation'} background={'#3F3BEF'} color={'white'} padding={'20px 40px'} fontWeight={'700'} />
                        </div>
                    </div>
                </div>
                <div>
                    <img className='nous-img' src={Money} alt='money'/>
                </div>
            </div>
        </div>
    )
}

export default Nous

const data = [
    {
        img: Tick,
        title: 'Notre équipe de pharmaciens spécialistes des négociations commerciales d’une officine.'
    },
    {
        img: Tick,
        title: 'Des robots qui collectent et centralisent contrats, factures, avoirs depuis vos espaces.'
    }, {
        img: Tick,
        title: 'Nos algorithmes d’ocr extrayant chacune des lignes d’achats de vos factures.'
    }, {
        img: Tick,
        title: 'Nos techniques de négociations éprouvées lors de rendez-vous commerciaux.'
    },
]