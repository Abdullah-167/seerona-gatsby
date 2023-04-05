import React from 'react'
import Tick from '../../images/tick.svg'
import Card from '../../images/yellowcard.png'
import '../../styles/obtenez.scss'

const Obtenez = () => {
    return (
        <div className='obtenez-bg'>
            <div className='conaitner'>
                <div className='obtenez-main'>
                    <div className='obtenez-img'>
                        <img src={Card} width='100%'/>
                    </div>
                    <div>
                        <h1 className='obtenez-heading'>Obtenez les <span className='primary-text'> meilleurs remises,  </span> sans aucun travail supplémentaire.</h1>
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

export default Obtenez



const data = [
    {
        img: Tick,
        title: 'Suivez avec précision l’ensemble de vos achats. Nous détectons la moindre erreur.'
    },
    {
        img: Tick,
        title: 'Débloquez le potentiel de vos données d’achat afin d’acheter mieux et moins cher.'
    }, {
        img: Tick,
        title: 'Négociez les meilleures offres partenaires en les simulant sur vos données d’achats.'
    }, {
        img: Tick,
        title: 'Préparez pertinemment vos rendez-vous commerciaux avec nos experts.'
    },
]