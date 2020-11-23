export const initialState = {
  backdrop: false,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_BACKDROP':
      return {
        ...state,
        backdrop: action.backdrop,
      };
    case 'UNSET_BACKDROP':
      return {
        ...state,
        backdrop: action.backdrop,
      };
    default:
      return state;
  }
};

export default reducer;
