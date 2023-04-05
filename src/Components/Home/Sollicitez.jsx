import React from 'react'
import Tick from '../../images/tick.svg'
import Button from '../Button'
import '../../styles/sollicitez.scss'

const Sollicitez = () => {
    return (
        <div className='sollicitez-bg'>
            <div className='conaitner'>
                <div className='sollicitez-main'>
                    <h3 className='sollicitez-heading'>Sollicitez nos <span>experts </span>à tout moment.</h3>
                    {data.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className='sollicitez-title'>
                                    <img src={item.img} alt='tick' />
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        )
                    })}
                    <div className='sollicitez-btn'>
                        <Button text={'Rencontrez nos experts'} background={'#3F3BEF'} padding={'20px 30px'} fontWeight={'700'} color={'white'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sollicitez


const data = [
    {
        img: Tick,
        title: 'Gagnez en clarté sur l’application et le versement de vos remises commerciales.'
    },
    {
        img: Tick,
        title: 'Identifiez les fournisseurs ne respectant pas leurs accords commerciaux.'
    }, {
        img: Tick,
        title: 'Comparez vos documents de synthèse fournisseur avec nos analyses.'
    },
]