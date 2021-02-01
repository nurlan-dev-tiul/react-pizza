import axios from 'axios';

export const setLoaded = (val) => {
  return {
    type: 'SET_LOADED',
    payload: val,
  };
};

// Get data of REST API
export const fetchPizzas = (category, sortBy) => (dispatch) => {
  // мы loaded диспатчим перед запросом, чтоб когда запрос еще не случился показывал скелет
  dispatch(setLoaded(false)); // здесь мы отправили наш загрузочный скелет

  axios
    .get(
      `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
        sortBy.order
      }`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data)); // dispatch actionCreator Pizzas
    });
};

// ActionCreator Pizzas
export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
