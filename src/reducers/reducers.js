export const playersReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [...state, action.player];

    case 'UPDATE_BUYIN':
      state[action.index].buyIn =
        parseInt(state[action.index].buyIn) + parseInt(action.buyIn);
      return [...state];

    case 'DELETE_PLAYER':
      const newState = [...state];
      newState.splice(action.index, 1);
      return newState;

    case 'SET_FINAL_TOTAL':
      state[action.playerIndex].finalTotal = action.finalTotal;
      return state;

    default:
      return state;
  }
};

export const gameActionsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_GAME_STARTED':
      return { ...state, started: true };

    case 'END_GAME':
      return { ...state, started: false };

    case 'SET_PLAYER_TO_UPDATE':
      return { ...state, playerToUpdate: action.playerToUpdate };

    case 'CLEAR_PLAYER_TO_UPDATE':
      return { ...state, playerToUpdate: null };

    default:
      return state;
  }
};
