import React, { useState, useEffect } from 'react';
import '../CatCard.scss'
import Cat from '../assets/CatPng.png'

const CatCard = (props) => {
    const [selected, setSelected] = useState(false)
    const [switsher, setSwitch] = useState(true)
    useEffect(() => {
        if (!selected) setSwitch(true)

    }, [selected])
    return (
        <div
            onMouseLeave={() => {
                if (selected) setSwitch(false)
            }}
            onClick={() => {
                if (props.foodStatus) setSelected(!selected)
            }}
            className={!props.foodStatus ? 'cardComponent disabled' : 'cardComponent'} >
            <div className={selected ? 'card selected' : 'card'}>
                <div>
                    <span className={!switsher ? 'cardSubtitle title selected' : 'cardSubtitle title'} >{switsher ? 'Сказочное заморское яство' : 'Котэ не одобряет?'}</span>
                    <div className='cardName'>
                        <strong>Нямушка</strong>
                        <span>{props.filler}</span>
                    </div>
                    <span className='cardSubtitle'><strong>{props.numberOfServings}</strong> порций </span>
                    <span className='cardSubtitle'><strong>{props.mouseCount}</strong>
                        {props.mouseCount >= 5 ? ' мышей ' : props.mouseCount === 1 ? ' мышь ' : ' мыши '}
                        в подарок</span>
                    <span className='cardSubtitle deskr'>{props.customerStatus}</span>
                </div>

                <div className='cat'>
                    <img src={Cat} alt="" />
                </div>
                <div className='weight'>
                    <strong>0,5</strong>
                    <span>кг</span>
                </div>

            </div>
            <div className='footer'>
                {!props.foodStatus ? <p>Печалька, {props.filler} закончился.</p> : !selected ? <p>Чего сидишь? Порадуй котэ, <span onClick={() => setSelected(!selected)}>купи.</span></p> : <p>{props.footerInfo}</p>}

            </div>
        </div>

    );
};

export default CatCard;