import React from 'react';

const toneClasses = {
    light: 'bg-white text-dark border border-dark/5',
    dark: 'bg-darkGrey text-light border border-light/5',
    soft: 'bg-lightGrey text-dark border border-dark/5',
};

const paddingClasses = {
    none: '',
    sm: 'p-5',
    md: 'p-6 tablet:p-5',
    lg: 'p-8 tablet:p-6',
};

const Card = React.forwardRef(function Card(
    { as: Tag = 'div', tone = 'light', padding = 'md', className = '', children, ...rest },
    ref
) {
    const composed = `rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300 ${toneClasses[tone]} ${paddingClasses[padding]} ${className}`.trim();
    return (
        <Tag ref={ref} className={composed} {...rest}>
            {children}
        </Tag>
    );
});

export default Card;
