import React from 'react'
import Tick from '../../images/tick.svg'
import Card from '../../images/blue.png'
import '../../styles/liberez.scss'

const Liberez = () => {
    return (
        <div className='conaitner'>
            <div className='liberez-main'>
                <div className='optez-img'>
                    <img src={Card} width='100%' alt='card' />
                </div>
                <div>
                    <h1 className='liberez-heading'>Libérez des<span className='primary-text'>  ressources  </span> pour développer votre officine.</h1>
                    <p className='liberez-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
        </div>
    )
}

export default Liberez



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
    },
]