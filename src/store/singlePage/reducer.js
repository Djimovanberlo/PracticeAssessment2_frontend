// reducer to deal with data from backend
const initialState = {
  stories: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SINGLE_PAGE":
      console.log("store1page", action.payload);
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
