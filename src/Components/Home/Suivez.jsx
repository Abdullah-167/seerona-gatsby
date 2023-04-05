import React from 'react'
import Button from '../../Components/Button'
import Excel from '../../images/excel.png'
import '../../styles/suivez.scss'

const Suivez = () => {
    return (
        <div className='vioci-bg'>
            <div className='conaitner'>
                <div className='suivez-main'>
                    <div className='suivez'>
                        <h2>Suivez vos remises avec notre modèle Excel</h2>
                        <p>Un guide pratique permettant au pharmacien de suivre les remises théoriques calculées par son grossiste-répartiteur.  </p>
                        <div>
                            <Button background={'#F7C31D'} text={'Téléchargez le votre'} padding={'15px 30px'} borderRadius={'48px'} color={'white'} fontWeight={'700'} />
                        </div>
                    </div>
                    <div className='excel-img'>
                        <img src={Excel} alt="Excel" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suivez