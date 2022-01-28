const initialStateModal = {
  cardone: '',
  cardtwo: '',
  cardthree: '',
};

export const ReducerModal = (state = initialStateModal, action) => {
  switch (action.type) {
    case 'CARDONE':
      return {
        ...state,
        cardone: action.payload,
      };

    case 'CARDTWO':
      return {
        ...state,
        cardtwo: action.payload,
      };

    case 'CARDTHREE':
      return {
        ...state,
        cardthree: action.payload,
      };

    default:
      return state;
  }
};
