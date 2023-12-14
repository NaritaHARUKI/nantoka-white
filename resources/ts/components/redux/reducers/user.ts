const initialState = {
    isLogin: false,
    name: '',
    mail: '',
    edited: []
  }
  
  const userData = (state = initialState, action) => {
    switch (action.type) {

      case 'LOGIN_SUCCES':
        return { ...state, ...action.payload ,isLogin: true}

      case 'CHANGE_PROFILE_DATA':
        return {
          ...state, edited: {...action.payload}
        }
      
      case 'EDITED_USERDATA':
        return { ...state, ...action.payload }

      case 'LOGOUT':
        console.log(action.payload)
        return {...state, ...action.payload}
        
      default:
        return state
    }
  }
  
  export default userData