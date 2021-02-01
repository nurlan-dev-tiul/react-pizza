import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import { Categories, SortPopup, PizzaBlock, PizzaPreloadBlock } from '../components';

// ActionCreators
import { setCategory, setSortBy,  } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCartAC } from '../redux/actions/cart';

const items = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const popupItems = [
  {
    name: 'популярности', type: 'popular', order: 'desc'
  },
  {
    name: 'цене', type: 'price', order: 'desc'
  },
  {
    name: 'алфавиту', type: 'name', order: 'asc'
  }
];


const Home = () => {
  
    const {pizzas, isLoaded} = useSelector(({ pizzasReducer }) => {
      return {
        pizzas: pizzasReducer.items, // тут у нас все пиццы
        isLoaded: pizzasReducer.isLoaded
       };
    });

    const {category, sortBy} = useSelector(({ filtersReducer }) => {
      return {
        category: filtersReducer.category, // тут у нас index категории
        sortBy: filtersReducer.sortBy
       };
    });

    const cartItems = useSelector(({ cartReducer }) => cartReducer.items);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy));
    }, [category, sortBy]);

    const onClickCategoryDispatch = React.useCallback((index) => {
      dispatch(setCategory(index))
    }, []);

    const onClickSortByDispatch = React.useCallback((type) => {
      dispatch(setSortBy(type))
    }, []);

    const addPizzaToCart = (obj) => {
      dispatch(addPizzaToCartAC(obj))
    }
    return (
        <div className="container">
          <div className="content__top">
            <Categories items={items} activeCategory={category} onClickCategory={onClickCategoryDispatch} />
            <SortPopup activeSortBy={sortBy.type} onClickSortBy={onClickSortByDispatch} popupItems={popupItems} />
          </div>
          <h2 className="content__title">{category === null ? 'Все пиццы' : items[category]}</h2>
          <div className="content__items">
            {
              isLoaded 
                ? pizzas.map(obj => <PizzaBlock onAddPizzaToCart={addPizzaToCart} 
                                                key={obj.id}
                                                inCartItems={cartItems[obj.id] && cartItems[obj.id].items.length} 
                                                {...obj} />) 
                : Array(9).fill(0).map((_, index) => <PizzaPreloadBlock key={index}/>)
            }
          </div>
      </div>
    );
};

export default Home;