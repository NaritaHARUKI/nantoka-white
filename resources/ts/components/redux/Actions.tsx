const Actions = {

    userData: (payload,dispatch) => {
        dispatch({ type: 'LOGIN_SUCCES',  payload })
    },

    deleteUserdata :  (payload,dispatch) =>{
        dispatch({ type: 'LOGOUT',  payload })
    },

    profileData :(payload,dispatch) => {
        dispatch({ type: 'CHANGE_PROFILE_DATA',  payload })
    },

    editedUserdata : (payload,dispatch) =>{
        dispatch({ type: 'EDITED_USERDATA',  payload })
    },

    cssData : (payload,dispatch) => {
        dispatch({ type: 'CHANGE_CSS',  payload })  
    }
    
}

export default Actions