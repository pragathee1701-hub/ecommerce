function cartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const existingItem = state.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );
      }

      return [
        ...state,
        {
          ...action.payload,
          quantity: 1
        }
      ];

    case "REMOVE":
      return state.filter(
        (item) => item.id !== action.payload
      );

    case "PLUS":
      return state.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      );

    case "MINUS":
      return state.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1
            }
          : item
      );

    default:
      return state;
  }
}

export default cartReducer;