
import Webservice from '../setting/webservice/webservice';
import {
    USER_PENDING,
    USER_PENDING_END,
    GET_MOVIES_SUCSESS,
    GET_MOVIES_FAILED,
    DELETE_MOVIES_SUCSESS,
    DELETE_MOVIES_FAILED 

  } from './actionType';


 export const getMovies = () => {
  return dispatch => {
    dispatch({
      type: USER_PENDING,
    });
       Webservice.GetMovies()
         .then(res => {
           if(res.data){
            getSuccess(dispatch, res);
           }else{
            getFaild(dispatch,res.error);
            }
          })
         .catch(err => {
            getFaild(dispatch, 'درخواست شما با خطا روبرو شد مجددا تلاش نمایید');
         });
    
  };
};


const getSuccess = (dispatch, data) => {

  dispatch({
    type: USER_PENDING_END,
  });
  dispatch({
    type: GET_MOVIES_SUCSESS,
    payload: data,
  });
  
};

const getFaild = (dispatch, error) => {
  dispatch({
    type: USER_PENDING_END,
  });
  dispatch({
    type: GET_MOVIES_FAILED,
    payload: error,
  });
};



//////////////////////Delete Movie
 export const deleteMovies = (data=[],itemid) => {
  return dispatch => {
    dispatch({
      type: USER_PENDING,
    });
      var newdata= data.data.filter((item,index)=>item.id != itemid)
      deleteSuccess(dispatch,{data:newdata , metadata:data.metadata})
  };
};


const deleteSuccess = (dispatch, data) => {

  dispatch({
    type: USER_PENDING_END,
  });
  dispatch({
    type: DELETE_MOVIES_SUCSESS,
    payload: data,
  });
  
};
