import React from 'react';
import PropTypes from 'prop-types';

const SortPopup = React.memo(({ popupItems, activeSortBy, onClickSortBy}) => {
    // По умолчанию наш Popup false то есть он будет скрыт
    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const sortRef = React.useRef();
    const activeLabelPopup = popupItems.find(obj => obj.type === activeSortBy).name;

// Get data code
    const popup = popupItems.map((item, index) => {
        return <li key={`${item.type}_${index}`}
                    onClick={() => selectActiveItem(item)} 
                    className={activeSortBy === item.type ? 'active' : ''}>
            {item.name}
        </li>
    });
// Click active css class for item
    const selectActiveItem = (index) => {
        onClickSortBy(index)
        setVisiblePopup(false);
    }

// Click  toggle popup    
    const toggleVisablePopup = () => {
        setVisiblePopup(!visiblePopup)
    }

// Здесь у нас код который отвечает за клик по всему документу и чтоб при этот закрывался наш popup
// e = это обьект который показывает какое действие мы совершили кликнули или навели на элемент
// в e.path свойстве хранятся DOM элементы по которому мы кликнули. Includes это javascript функция
// которая говорит есть ли такой элемент в массиве или обьекте 
// тут в коде мы говорим если мы кликнули вне области sortRef = <div class="sort"> 
// то делай false закрывай popup

    const handleOutsideClick = (event) => {
        // e.path работает только в хроме, для кроссплатформы мы напишем несколько вариантов
        const path = event.path || (event.composedPath && event.composedPath());
        if(!path.includes(sortRef.current)){
            setVisiblePopup(false)
        }
    }
    
    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, []);

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <svg
                    className={visiblePopup ? 'rotated' : ''}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                {/* При клике мы говорим чтобы false стал true и если еще раз кликнуть наоборот */}
                <span onClick={toggleVisablePopup}>{activeLabelPopup}</span>
            </div>
              {/* тут мы говорим если visiblePopup true покажи этот блок если false не показывай */}
             {visiblePopup && (
                  <div className="sort__popup">
                  <ul>
                     { popup } 
                    {/* <li className="active">популярности</li>
                    <li>ценеee</li>
                    <li>алфавиту</li> */}
                  </ul>
                </div>
             )}
        </div>
    );
});
SortPopup.propTypes = {
    activeSortBy: PropTypes.string.isRequired,
    popupItems: PropTypes.arrayOf(PropTypes.object), // тут мы указали что получаем массив и значения его число
    onClickSortBy: PropTypes.func,
}

// если каким то образом не передадут имя или картинку мы можем указать что нибудь по умолчанию
SortPopup.defaultProps = {
    popupItems: []
}
export default SortPopup;