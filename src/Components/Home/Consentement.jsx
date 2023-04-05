import React from 'react'
import TickStars from '../../images/tickstars.svg'
import Brain from '../../images/brain.svg'
import Security from '../../images/security.svg'
import '../../styles/consentement.scss'


const Consentement = () => {
    return (
        <div className='obtenez-bg'>
            <div className='conaitner consentement-div'>
                <div className='const-heading'>
                    <h1>Nous mettons l’accent sur la <span>protection</span> de vos données</h1>
                </div>
                <div className='consentement-main'>
                    {cards.map((item, index) => {
                        return (
                            <div className='consentement' key={index}>
                                <div>
                                    <img src={item.img} alt="icon" />
                                </div>
                                <h3>{item.heading}</h3>
                                <p>{item.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Consentement;

const cards = [
    {
        img: TickStars,
        heading: 'Consentement',
        title: 'Vos données sont collectés qu’une fois votre accord clairement exprimé.'
    },
    {
        img: Brain,
        heading: 'Confidentialité',
        title: 'Vos données et conditions commerciales ne sont transmises à personne.'
    }, {
        img: Security,
        heading: 'Sécurité',
        title: 'Nous veillons à ce que vos données soient sécurisées et ... .'
    },
]