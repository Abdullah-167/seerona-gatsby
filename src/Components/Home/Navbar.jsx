import React, { useState } from 'react'
import Logo from '../../images/logo.svg'
import Button from '../Button'
import { Link } from 'gatsby'
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import '../../styles/navbar.scss'


const Navbar = () => {

    const [open, setOpen] = useState();

    const handleToggel = () => {
        setOpen(!open);
        document.body.style.overflow = open ? 'auto' : 'hidden';
    }

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
                                } to='/form'>
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
                                to='/form'>
                                <span>
                                    LOG In
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
                <div className='hamburger' onClick={handleToggel}>
                    {open ? (
                        <RxCross1 />
                    ) : (
                        <GiHamburgerMenu />
                    )}
                </div>

            </div>

            <div>
                {open && (
                    <div className={`responsive-links ${open ? 'animation' : 'animation-out'}`}>
                        <div className='res-nav-links'>
                            <Link
                                style={
                                    {
                                        textDecoration: 'none'
                                    }
                                } to='/form'>
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
                                to='/form'>
                                <span>
                                    LOG In
                                </span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
