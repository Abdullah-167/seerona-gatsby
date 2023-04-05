import React from 'react'
import Image from '../../images/image1.svg'
import Image2 from '../../images/image2.svg'
import Image3 from '../../images/image3.svg'
import Image4 from '../../images/image4.svg'
import Slider from './Slider'

const Choisissez = () => {

    return (
        <div className='choisissez-bg'>
            <div className='conaitner'>
                <h3 className='choisissez-heading'>Choisissez la <span>simplicité </span>:</h3>

                <Slider />
            </div>
        </div>
    )
}

export default Choisissez

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