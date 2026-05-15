import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const baseClasses = 'inline-flex items-center justify-center gap-2 font-rubik font-extrabold rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-light disabled:opacity-50 disabled:pointer-events-none';

const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-base px-7 py-4',
};

const variantClasses = {
    primary: 'bg-orange text-white hover:bg-orange/90',
    secondary: 'bg-darkGrey text-white hover:bg-darkGrey/90',
    ghost: 'bg-transparent text-darkGrey border border-darkGrey/15 hover:bg-darkGrey hover:text-light',
    outline: 'bg-transparent text-light border border-light/30 hover:bg-light hover:text-darkGrey',
};

const MotionLink = motion.create(Link);

const hoverProps = { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } };

const Button = React.forwardRef(function Button(
    { as = 'button', href, variant = 'primary', size = 'md', className = '', children, external, ...rest },
    ref
) {
    const composed = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim();

    if (href) {
        const externalProps = external ? { target: '_blank', rel: 'noreferrer' } : {};
        return (
            <MotionLink ref={ref} href={href} className={composed} {...hoverProps} {...externalProps} {...rest}>
                {children}
            </MotionLink>
        );
    }

    const Component = motion[as] || motion.button;
    return (
        <Component ref={ref} className={composed} {...hoverProps} {...rest}>
            {children}
        </Component>
    );
});

export default Button;
