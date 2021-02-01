import React from 'react';
import classNames from 'classnames';

const Button = ({outline, children, classButtonCart, buttonAddClassName, onClickPizza}) => {
    return (
        <div>
            <button onClick={onClickPizza} className={classNames('button', classButtonCart, {
                'button--add': buttonAddClassName,
                'button--outline': outline,
                
            })}>{children}</button>
        </div>
    );
};

export default Button;