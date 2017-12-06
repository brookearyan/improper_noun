const initialState = {
  alias: '',
  noun_one: '',
  noun_two: '',
  noun_three: '',
  noun_four: '',
  noun_five: ''
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.haikuFormData;

    case 'RESET_HAIKU_FORM':
      return initialState;

    default:
      return state;
  }
}
