import React from 'react'
import Tick from '../../images/tick.svg'
import HandShake from '../../images/handshake.png'
import Sheild from '../../images/shield.svg'
import Button from '../Button'
import '../../styles/auditez.scss'

const Auditez = () => {
    return (
        <div className='conaitner'>
            <div className='auditez-main'>
                <div>
                    <div className='shield'>
                        <img src={Sheild} alt="sheild" />
                    </div>
                    <h1 className='auditez-heading'>Auditez vos achats  <span className='libre primary-text'> renforce </span> vos relations commerciales.</h1>
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
                <div className='handshake-img'>
                    <img src={HandShake} width={''}/>
                </div>
            </div>
        </div>
    )
}

export default Auditez

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