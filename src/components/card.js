import React from 'react'

function Card(props) {
    return (
        <article
            className='fl w4 w5-m w5-l pa3 grow'
            onClick={props.onClick}>
            <div className={`aspect-ratio aspect-ratio--4x6 bg-${props.color} br3 ba bw1 b--moon-gray`}>
                <div className='pa3 f5 f2-ns tc'>{props.text}</div>
            </div>
        </article>
    );
}

export default Card;