import React, { useState } from 'react';
import Arrow from '../../images/downarrow.svg';
import '../../styles/question.scss'

const Question = () => {

    const [isOpen, setisOpen] = useState(null);

    const handleClick = (index) => {
        if (index === isOpen) {
            setisOpen(null);
        } else {
            setisOpen(index);
        }
    };

    return (
        <div className='conaitner'>
            <div className='question-main'>
                <h2 className='question-heading'> Une question ? Des réponses pouvant vous <span>aider</span>!</h2>
                <div className='faq-main'>
                    {faq.map((item, index) => {
                        return (
                            <div>
                                <div className='faq' key={index} onClick={() => handleClick(index)}>
                                    <p>{item.text}</p>
                                    <div>
                                        <img className={`${isOpen === index ? 'rotate' : ''}`} src={item.img} alt='arrow' />
                                    </div>
                                </div>
                                {isOpen === index && <div className={`${isOpen === index ? 'answer' : 'answer2'}`}>{item.answer}</div>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Question;

const faq = [
    {
        text: 'Que vérifiez-vous sur les factures ?',
        img: Arrow,
        answer: 'Nous vérifions plusieurs éléments sur les factures, tels que le nom du patient, le nom du médicament, la dose, la quantité, la date de la prescription et la date de la facture.'
    },
    {
        text: 'Comment récupérez-vous mes documents ?',
        img: Arrow,
        answer: 'Vous pouvez nous envoyer vos documents par email, par fax ou en les téléchargeant sur notre site web.'
    },
    {
        text: 'Quel type de remises vérifiez-vous ?',
        img: Arrow,
        answer: 'Nous vérifions les remises liées à la facturation des médicaments, telles que les remises commerciales, les remises de volume et les remises de fidélité.'
    },
    {
        text: 'De quelles informations avez-vous besoin ?',
        img: Arrow,
        answer: 'Nous avons besoin de vos factures et de vos relevés de paiement pour vérifier vos remises.'
    },
    {
        text: 'Y a-t-il une durée minimale d’engagement à Seerona?',
        img: Arrow,
        answer: 'Non, il n\'y a pas de durée minimale d\'engagement. Vous pouvez utiliser nos services aussi longtemps que vous le souhaitez.'
    },
    {
        text: 'Quel type de pharmacies correspond à Seerona ?',
        img: Arrow,
        answer: 'Nous travaillons avec toutes les pharmacies en France, qu\'elles soient indépendantes ou faisant partie d\'un groupe.'
    },
]
