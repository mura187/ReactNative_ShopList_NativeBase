export const addShoppingList = payload => ({
  type: 'ADD_SHOPPING_LIST',
  payload,
});
export const editShoppingList = payload => ({
  type: 'EDIT_SHOPPING_LIST',
  payload,
});
export const deleteFromShoppingList = payload => ({
  type: 'DELETE_FROM_SHOPPING_LISTS',
  payload,
});

export const archiveShoppingList = payload => ({
  type: 'ARCHIVE_SHOPPING_LIST',
  payload,
});

export const deleteFromArchivedList = payload => ({
  type: 'DELETE_FROM_ARCHIVED_LISTS',
  payload,
});
