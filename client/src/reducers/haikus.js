
export default (state = [], action) => {
  switch(action.type) {
    case 'GET_HAIKUS_SUCCESS':
      return action.haikus;

    case 'CREATE_HAIKU_SUCCESS':
      return state.concat(action.haiku);

    default:
      return state;
  }
}
