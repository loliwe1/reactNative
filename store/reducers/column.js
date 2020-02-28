import ADD_COLUMN from '../actions/actions';

const initialState = [
  { title: 'TODO', id: 1 },
  { title: 'TESTING', id: 2 },
  { title: 'DONE', id: 3 },
  { title: 'In Progress', id: 4 },
];

function column(state = initialState, action) {
  switch (action.type) {
    case ADD_COLUMN: return [...state, { title: action.title }];
    default:
      return state;
  }
}

export default column;
