export const INITIAL_STATE = {
  favoriteList: []
};

export const favoriteReducer = (state = INITIAL_STATE, action: any) => {
  if (action.type === 'ACTION_CLICKED_FAVORITE') {
    const hasItem =
      state.favoriteList.filter((item) => item === action.clicked).length > 0;

    if (hasItem) {
      return {
        ...state,
        favoriteList: state.favoriteList.filter(
          (item: any) => item !== action.clicked
        )
      };
    }

    return {
      ...state,
      favoriteList: [...state.favoriteList, action.clicked]
    };
  }

  return {
    ...state
  };
};
