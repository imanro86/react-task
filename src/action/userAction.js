
import Webservice from '../setting/webservice/webservice';
import {
    USER_PENDING,
    USER_PENDING_END,
    USER_LOGIN_SUCSESS,
    USER_LOGIN_FAILED,
  } from './actionType';


  export const userLogin = (username, password) => {
    return dispatch => {
      dispatch({
        type: USER_PENDING,
      });
      if (username === '' || username.length < 10) {
        loginFaild(dispatch, 'کد ملی یا ایمیل اشتباه است');
       
      } else if (password === '' || password.password < 3) {

        loginFaild(dispatch,  'رمز عبور را صحیح نیست');
       
      } else {

         Webservice.Login(username, password)
           .then(res => {
             if(res.token){
               loginSucess(dispatch, res);
             }else{
                 loginFaild(dispatch,res.error);
                 }
                   })
           .catch(err => {
             console.log(err);
             loginFaild(dispatch, 'درخواست شما با خطا روبرو شد مجددا تلاش نمایید');
           });
      }
    };
  };
  
  
  const loginSucess = (dispatch, data) => {

    dispatch({
      type: USER_PENDING_END,
    });
    dispatch({
      type: USER_LOGIN_SUCSESS,
      payload: data,
    });
    
  };
  
  const loginFaild = (dispatch, error) => {
    dispatch({
      type: USER_PENDING_END,
    });
    dispatch({
      type: USER_LOGIN_FAILED,
      payload: error,
    });
  };
 