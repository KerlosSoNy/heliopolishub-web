import React from 'react';

const AnimationWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <span className={"animation-wrapper"}>
            {children}
        </span>
    );
};

export default AnimationWrapper;