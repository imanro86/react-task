import {
    USER_PENDING,
    USER_PENDING_END,
    USER_LOGIN_SUCSESS,
    USER_LOGIN_FAILED,
} from '../action/actionType'

const INITIAL_STATE = {
    loading: false,
    islogin: false,
    iserorr:false,
    token: '',
    error: ''
}


const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_PENDING:
            return {
                ...state, loading: true
            }
            case USER_PENDING_END:
                return {
                    ...state, loading: false
                }
                    case USER_LOGIN_SUCSESS:
                        return {
                            ...state,
                            islogin: true,
                            iserorr:false,
                            error: '',
                            token: action.payload,
                            loading: false
                        }
                        case USER_LOGIN_FAILED:
                            return {
                                ...state,
                                iserorr:true,
                                error: action.payload,
                                password: '',
                                loading: false
                            }
                               default:
                                    return state
    }
};

export default authReducer 