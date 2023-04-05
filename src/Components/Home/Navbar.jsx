import React from 'react'
import Logo from '../../images/logo.svg'
import Button from '../Button'
import { Link } from 'gatsby'
import { GiHamburgerMenu } from 'react-icons/gi';
import '../../styles/navbar.scss'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='nav-main'>
                <div>
                    <div className='nav-inner-div'>
                        <Link to='/'>
                            <div className='nav-logo'>
                                <img src={Logo} alt={'logo'} />
                            </div>
                        </Link>
                        <div className='nav-links'>
                            <Link
                                style={
                                    {
                                        textDecoration: 'none'
                                    }
                                } to='accueil'>
                                <span>
                                    Accueil
                                </span>
                            </Link>
                            <Link
                                style={
                                    {
                                        textDecoration: 'none'
                                    }
                                }
                                to='/nosoffer'>
                                <span>
                                    Nos offres
                                </span>
                            </Link>
                        </div>

                    </div>
                </div>
                <span>
                    <Button text='Recevez une analyse gratuite' padding={'28px 65px'} background={'black'} color={'white'} />
                </span>
            </div>
            <div className='responsive-nav'>
                <div className='nav-inner-div'>
                    <Link to='/'>
                        <div className='nav-logo'>
                            <img src={Logo} alt={'logo'} />
                        </div>
                    </Link>
                </div>
                <div className='hamburger'>
                    <GiHamburgerMenu />
                </div>
            </div>
        </div>
    )
}

export default Navbar
