// reducer to deal with data from backend
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ALL_HOMEPAGES":
      console.log("store", action.payload);
      return [...state, ...action.payload];
    default:
      return state;
  }
};
