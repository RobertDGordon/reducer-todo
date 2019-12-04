export const initialState = [
    
        {
            item: 'Learn about reducers',
            completed: false,
            id: Date.now()
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
            console.log('toggling', action.payload)
          return state.map(item => {
              if (item.id === action.payload){
                  return {
                      ...item,
                      completed: !item.completed
                  }
              }
              return item;
          })
        default:
          return state;
      }
}