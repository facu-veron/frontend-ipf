const initialState = {
  token: null,
  errorMessage: null,
  user: null,
};

const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;

  const actions = {
    LOG_IN: { ...state, ...payload },
    LOG_IN_ERROR: { ...state, errorMessage: payload },
    LOG_OUT: initialState,
  };

  return actions[type] || state;
};

export default loginReducer;
