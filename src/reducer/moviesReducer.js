import {
    USER_PENDING,
    USER_PENDING_END,
    GET_MOVIES_SUCSESS,
    GET_MOVIES_FAILED ,
    DELETE_MOVIES_SUCSESS
} from '../action/actionType'

const INITIAL_STATE = {
    loading: false,
    iserorr:false,
    error: '',
    data:[]
}


const moviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_PENDING:
            return {
                ...state, loading: true
            }
            case USER_PENDING_END:
                return {
                    ...state, loading: false
                }
                    case GET_MOVIES_SUCSESS:
                        return {
                            ...state,
                            iserorr:false,
                            error: '',
                            data: action.payload,
                            loading: false
                        }
                        case GET_MOVIES_FAILED:
                            return {
                                ...state,
                                iserorr:true,
                                error: action.payload,
                                loading: false,
                                
                            }
                            case DELETE_MOVIES_SUCSESS:
                                return {
                                    ...state,
                                    iserorr:false,
                                    error: '',
                                    data: action.payload,
                                    loading: false
                                }
                               default:
                                    return state
    }
};

export default moviesReducer; 