import React, { useState } from 'react'
import Coin from '../../images/coin.svg'
import Button from '../Button'
import '../../styles/voici.scss'

const Voici = () => {

    const [range, setRange] = useState(0);

    const handleChange = (e) => {
        setRange(e.target.value)
    }

    const regulation = `€${(2500 + parseInt(range)).toLocaleString()}`

    return (
        <div className='vioci-bg'>
            <div className='vioci-main'>
                <h2 className='vioci-heading'>Voici combien un pharmacien peut gagner avec Seerona :</h2>
                <span className='vioci-btn'>
                    <button >
                        CA de votre officine: €2,5M
                    </button>
                </span>
                <div className='vioci-range'>
                    <input type="range" name="" id="" step={'500'} max={'10000'} value={range} onChange={handleChange} />
                </div>
                <div className='vioci-card'>
                    <div>
                        <p>Votre potentielle régulation</p>
                        <span>{regulation}</span>
                    </div>
                    <div>
                        <img src={Coin} />
                    </div>
                </div>
                <span className='vioci-btn'>
                    <Button text={'Test gratuit'} background={'#000000'} padding={'20px 30px'} color={'white'} fontWeight={'700'} borderRadius={'0'} />
                </span>
            </div>
        </div>
    )
}

export default Voici