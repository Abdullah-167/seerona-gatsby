import React from 'react'
import Button from '../../Components/Button'
import Linkedin from '../../images/linkedin.svg'
import Message from '../../images/message.svg'
import '../../styles/footer.scss'

const Footer = () => {
    return (
        <div className='footer-bg'>
            <div className='conaitner'>
                <div className='footer-main'>
                    <div>
                        <span>
                            <Button background={'white'} padding={'15px 70px'} text={'Text'} fontWeight={'700'} />
                        </span>
                        <div>
                            <span className='footer-icon'>
                                <img src={Linkedin} alt="linkedin" />
                                <img src={Message} alt="msg" />
                            </span>
                        </div>
                    </div>
                    <div
                        style={{
                            fontSize: '17px',
                            maxWidth:'351px',
                            margin:'20px 0 0 0'
                        }}
                    >
                        <Button background={'white'} text={'Recevez une analyse gratuite'} fontWeight={'700'} padding={'25px 50px'} color={'#3F3BEF'} />
                    </div>
                </div>
                <div className='copyright'>
                    <span>Copyright © 2023 Seerona, Tous droits réservés.</span>
                    <p>Mentions légales</p>
                </div>
            </div>
        </div>
    )
}

export default Footer