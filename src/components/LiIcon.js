import React from 'react';
const LiIcon = ({className}) => {
    return (
    <figure className={`absolute left-0 stroke-dark ${className}`}>
        <svg width='75' height='75' viewBox='0 0 100 100'>
            <circle cx="75" cy="50" r="20" className='stroke-primary stroke-1 fill-none'/>
            <circle cx="75" cy="50" r="20" className='stroke-[2px] fill-light'/>
            <circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-emerald-900 '/>
        </svg>
    </figure>
    )
}

export default LiIcon