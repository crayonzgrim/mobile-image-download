export const ACTION_CLICKED_FAVORITE = 'ACTION_CLICKED_FAVORITE';

export const onClickFavorite = (item: any) => {
  return {
    type: ACTION_CLICKED_FAVORITE,
    clicked: item
  };
};
