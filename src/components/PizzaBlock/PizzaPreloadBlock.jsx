import React from 'react';
import ContentLoader from "react-content-loader";

const PizzaPreloadBlock = () => {
    return(
        <ContentLoader 
        className='pizza-block'
            speed={2}
            width={290}
            height={490}
            viewBox="0 0 283 490"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="134" cy="161" r="112" /> 
            <rect x="0" y="302" rx="0" ry="0" width="280" height="29" /> 
            <rect x="0" y="345" rx="4" ry="4" width="280" height="84" /> 
            <rect x="0" y="451" rx="0" ry="0" width="70" height="25" /> 
            <rect x="161" y="443" rx="16" ry="16" width="117" height="33" />
        </ContentLoader>
    ) 
};

export default PizzaPreloadBlock;