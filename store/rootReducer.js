import initialState from './initialState';

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_SHOPPING_LIST':
    let id=0
      if (state.shoppingList[state.shoppingList.length - 1]) {
        id = state.shoppingList[state.shoppingList.length - 1] && state.shoppingList[state.shoppingList.length - 1].id + 1;
      } else if (state.archived[state.archived.length - 1]) {
        id = state.archived[state.archived.length - 1] && state.archived[state.archived.length - 1].id + 1;
      }
      return {
        ...state,
        shoppingList: state.shoppingList.concat({
          id,
          createdAt: Date.now(),
          ...payload
        })
      };
    case 'EDIT_SHOPPING_LIST':
      return {
        ...state,
        shoppingList: state.shoppingList
          .filter(item => item.id !== payload.id)
          .concat({ ...payload })
          .sort( (a,b) => a.createdAt > b.createdAt )
      };
    case 'DELETE_FROM_SHOPPING_LISTS':
      return {
        ...state,
        shoppingList: state.shoppingList
          .filter( list => list.id !== payload.id)
          .sort( (a,b) => a.createdAt > b.createdAt )
      };
    case 'ARCHIVE_SHOPPING_LIST':
      return {
        ...state,
        shoppingList: state.shoppingList
          .filter(item => item.id !== payload.id)
          .sort( (a,b) => a.createdAt > b.createdAt ),
        archived: state.archived
          .concat(payload)
          .sort( (a,b) => a.createdAt > b.createdAt )
      };
    case 'DELETE_FROM_ARCHIVED_LISTS':
      return {
        ...state,
        archived: state.archived
          .filter( list => list.id !== payload.id)
      };
    default:
      return state;
  }
};

export default rootReducer;
