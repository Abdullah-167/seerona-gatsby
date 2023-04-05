import React from 'react'
import BlockImg from '../../images/blocks.png'
import '../../styles/accordez.scss'

const Accordez = () => {
    return (
        <div className='accordez-bg'>
            <div className='conaitner accordez-main'>
                <div className='accordez-header'>
                    <h2>Accordez-vous le <span className='libre'> temps nécéssaire </span> à vos remises ? </h2>
                    <div>
                        {para.map((item, index) => {
                            return (
                                <div key={index}>
                                    <p className='accordez-para'>{item.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <img className='card-img' src={BlockImg} width={''} alt='block' />
                </div>
            </div>
        </div>
    )
}

export default Accordez

const para = [
    {
        title: 'Gérer les stocks d’une pharmacie est une étape indispensable à son bon fonctionnement. Plusieurs commandes et livraisons par jour. '
    },
    {
        title: 'Vérifier un tas de facture tout en accordant le temps nécéssaire à vos patients. Cela vous semble impossible. '
    }, {
        title: 'Nous pouvons vous aider à résoudre ce problème.  '
    }
]
