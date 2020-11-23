export const initialState = {
  backdrop: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_BACKDROP':
      return {
        ...state,
        backdrop: true,
      };

    case 'UNSET_BACKDROP':
      return {
        ...state,
        backdrop: false,
      };
    default:
      return state;
  }
};

export default reducer;
