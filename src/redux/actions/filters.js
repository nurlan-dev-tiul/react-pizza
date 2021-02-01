// ActionCreator Sort popup
export const setSortBy = (name) => ({
  type: 'SET_SORT_BY',
  payload: name,
});

// ActionCreator Category
export const setCategory = (index) => ({
  type: 'SET_CATEGORY',
  payload: index,
});
