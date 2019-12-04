export const initialState = {
    todos:[
        {
            item: 'Learn about reducers',
            completed: false,
            id: 1
        }
    ]
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "SET_ITEM":
          return { ...state, title: action.payload };
        case "TOGGLE_COMPLETED":
          return { ...state, completed: !state.completed };
        default:
          return state;
      }
}