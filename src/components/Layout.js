import React from 'react';

const Layout = ({children, className=""}) => {
    return(
        <div className={`w-full h-full inline-block z-0 bg-light laptop:p-16 tablet:p-8 ${className}`}>
            {children}
        </div>
    )
}

export default Layout;