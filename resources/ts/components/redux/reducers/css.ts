const initialState = {
    title: '',
    subtitle: '',
    content: '',
  }
  
  const cssData = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_CSS':
        const payload = action.payload
        return { ...state, ...payload }
      default:
        return state
    }
  }
  
  export default cssData