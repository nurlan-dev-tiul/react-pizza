import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(({activeCategory, items, onClickCategory}) => {

    // items && означает типа проверку если items массив есть то выводи если нету то выведи пустоту
    // если такую проверку не делать то выйдет ошибка если массив items придет пустым undefined
    const categories = items && items.map((item, index) => {
        return <li className={activeCategory === index ? 'active' : ''} 
                    onClick={() => onClickCategory(index)} // при клике мы отправим action в redux
                    key={`${item}_${index}`}>
                    {item}
                </li>
    })
    return (
        <div className="categories">
            <ul>
                {/* При клике на "Все" мы activeItem делаем null и срабатывает css класс 'active' */}
                <li className={activeCategory === null ? 'active' : ''} 
                    onClick={() => onClickCategory(null)}>Все</li>
                {categories}
            </ul>
        </div>
    );
});

Categories.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string), 
    onClickCategory: PropTypes.func,
}

// если каким то образом не передадут имя или картинку мы можем указать что нибудь по умолчанию
Categories.defaultProps = {
    activeCategory: null, 
    items: []
}

export default Categories;