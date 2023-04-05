import React from 'react'
import Tick from '../../images/tick.svg'
import Card from '../../images/doctor.png'
import Setting from '../../images/setting.svg'
import '../../styles/optez.scss'

const Optez = () => {
    return (
        <div className='obtenez-bg'>
            <div className='conaitner'>
                <div className='optez-main'>
                    <div className='optez-img'>
                        <img src={Card} width={'100%'} />
                    </div>
                    <div>
                        <div className='optez-img2'>
                            <img src={Setting} width={51} />
                        </div>
                        <h1 className='obtenez-heading'>Optez pour un accompagnement <span className='primary-text'> personnalisé </span></h1>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Optez



const data = [
    {
        img: Tick,
        title: 'Laissez Seerona centraliser, organiser et traiter l’ensemble de vos documents. Vous n’aurez rien à faire.'
    },
    {
        img: Tick,
        title: 'Transmettez nous le fonctionnement de vos remises lors d’un appel de 15min.'
    }, {
        img: Tick,
        title: 'Posez-nous toutes vos questions, nos experts adaptent nos rapports d’analyse à votre officine.'
    }, {
        img: Tick,
        title: 'Préparez pertinemment vos rendez-vous commerciaux avec nos experts.'
    },
]