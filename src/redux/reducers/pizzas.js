const initialState = {
  items: [],
  isLoaded: false, // это свойство для прелоада
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true, // если все пицыы загрузились тогда true
      };
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};
export default pizzas;
