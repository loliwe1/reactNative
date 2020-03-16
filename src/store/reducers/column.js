import {
  getColumns,
  addColumn,
  deleteColumn,
  changeColumnTitle,
} from '../routines/routines';

const initialState = [];

function column(state = initialState, action) {
  switch (action.type) {
    case getColumns.SUCCESS: return action.payload;
    case getColumns.FAILURE: return action.payload;
    case addColumn.SUCCESS: return [...state, { ...action.payload }];
    case deleteColumn.SUCCESS: return [
      ...state.filter((column) => column.id !== action.payload),
    ];
    case changeColumnTitle.SUCCESS: return state.map(
      (column) => (column.id === action.payload.columnId
        ? { ...column, title: action.payload.title }
        : column),
    );
    case changeColumnTitle.FAILURE: return action.payload;
    default:
      return state;
  }
}

export default column;
