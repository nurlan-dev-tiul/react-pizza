import React from 'react';

const CartItem = ({name, type, size, totalPrice, totalCount, imageUrl}) => {
    return (
      <div className="cart__item">
        <div className="cart__item-img">
          <img
            className="pizza-block__image"
            src={imageUrl}
            alt="Pizza"
          />
        </div>
        <div className="cart__item-info">
          <h3>{name}</h3>
          <p>{type} тесто, {size} см.</p>
        </div>
        <div className="cart__item-count">
          <b>{totalCount} шт.</b>
        </div>
        <div className="cart__item-price">
          <b>{totalPrice} ₽</b>
        </div>
      </div>
    );
};

export default CartItem;