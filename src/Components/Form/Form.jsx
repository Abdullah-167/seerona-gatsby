import React, { useState } from 'react';
import Light from '../../images/light.png';
import Button from '../../Components/Button';
import '../../styles/form.scss'

const Form = () => {
    const [name, setName] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [alertMsg, setAlertMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || prenom === '' || email === '' || phone === '') {
            setAlertMsg('Please fill all the blanks');
            setTimeout(() => {
                setAlertMsg('');
            }, 3000);
        } else {
            setName('');
            setPrenom('');
            setEmail('');
            setPhone('');
            setAlertMsg('Thank you for submitting the form!');
            setTimeout(() => {
                setAlertMsg('');
            }, 3000);
        }
    };

    return (
        <div className="container form">
            <div className="form-main">
                <div>
                    <h2 className="form-heading">
                        <span> Audit gratuit </span>sur vos achats grossiste et génériques
                    </h2>
                </div>
                <div className="form-5x">
                    {counting.map((item, index) => {
                        return (
                            <div key={index}>
                                <h3 className="primary-text">{item.title}</h3>
                                <p className="form-para">{item.para}</p>
                            </div>
                        );
                    })}
                </div>
                <div className="form-img">
                    <img src={Light} alt="light" />
                </div>
            </div>
            <form className="input-main" onSubmit={handleSubmit}>
                <p className={`${alertMsg === 'Please fill all the blanks' ? 'red-alert' : 'green-alert'}`}>{alertMsg}</p>
                <div>
                    <div className="name-input">
                        <div>
                            <label htmlFor="Nom">Nom*</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="Prénom">Prénom*</label>
                            <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
                        </div>
                    </div>
                    <div className="email-input">
                        <div>
                            <label htmlFor="Email">Email*</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="Télephone">Télephone</label>
                            <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                        </div>
                    </div>
                    <div className='form-btn'>
                        <Button
                            text={'Recevez un audit gratuit'}
                            padding={'15px 55px'}
                            background={'#3F3BEF'}
                            color={'white'}
                            fontWeight={'700'}
                            borderRadius={'6px'}
                            type="submit"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};
const counting = [
    {
        title: '5x',
        para: 'ROI garanti',
    },
    {
        title: '1k+',
        para: 'heures économisées ',
    },
    {
        title: '30k€',
        para: 'en régulation ',
    },
];

export default Form;
