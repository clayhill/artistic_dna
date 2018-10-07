import React from 'react'

function Card(props) {
    return (
        <article
            className='fl w-100 w-50-m w-25-l pa3 grow'
            onClick={props.onClick}>
            <div className={`aspect-ratio aspect-ratio--1x1 bg-${props.color} br3 ba bw1 b--moon-gray`}>
                <div className='pa3 f2'>{props.text}</div>
            </div>
        </article>
    );
}

export default Card;