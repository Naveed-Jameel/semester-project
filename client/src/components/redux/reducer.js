const initialState = "Login";

const changeTheState = (state = initialState, action) => {
  switch (action.type) {
    case "Login":
      return state;
    default:
      return state;
  }
};

export default changeTheState;
