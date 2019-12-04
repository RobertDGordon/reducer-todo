export const initialState = [
    
        {
            item: 'Learn about reducers',
            completed: false,
            id: 1
        }
];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
          return [
              ...state,
              {
                item: action.payload,
                completed: false,
                id: Date.now(),
            }
          ];
        case "TOGGLE_COMPLETED":
          return [{ ...state, completed: !state.completed }];
        default:
          return state;
      }
}