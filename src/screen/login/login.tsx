import React, { useEffect,useCallback } from 'react';

import { Formik } from "formik";
import * as Yup from "yup";
import { connect} from 'react-redux';


import logo from '../../assets/img/logo.png';
import imgusername from '../../assets/img/username.png';
import imgpassword from '../../assets/img/password.png';
import imggmail from '../../assets/img/gmail.png';
import bgimage from '../../assets/img/View.png';

import {userLogin} from '../../action/userAction';
import {useNavigate} from 'react-router-dom';

const  Login = (props:any) => {

    const {loading,userLogin,iserorr,error,islogin }= props;
    
    const navigate = useNavigate();
    const handlePath = useCallback((url:string) =>navigate(url,{replace: true}), [navigate]);
  
    useEffect(()=>{
        if(!iserorr && islogin){
            handlePath("/Home")
        }
    },[loading])

    const schema = Yup.object().shape({
      
      username: Yup.string()
      .required("ایمیل یا کد ملی خود را وارد کنید"),
      //.email("Invalid email format"),
      password: Yup.string()
      .required("رمز عبور خود را وارد کنید")
      .min(4, "رمز عبور باید بیشتر از 4 رقم باشد"),
  });

   const submitHandler = (values:{username:string,password:string}) => {
        userLogin(values.username, values.password)
   };

  return (
      <>
      <Formik
        validationSchema={schema}
        initialValues={{ username: "", password: "" }}
      
        onSubmit={(values, { setSubmitting }) => {
            submitHandler(values )
            setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full font-dana'>
            <div className='flex flex-col max-w-[600px] justify-center bg-slate-100'>
                <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto p-10 px-10'>
                  <div className='flex h-69 w-358  justify-center p-2 mb-4'>
                    <div className=''>
                      <p className='text-lg  font-medium text-zinc-800 m-1 text-center'>ورورد به حساب کاربری</p>
                      <p className='text-xs text-zinc-500 text-center'>شرکت توسعه و پخش مکدنالد</p>
                    </div>
                    <div className=' flex h-5 w-20 justify-center'>
                      <img src={logo} className="h-12 w-12" alt="logo" />
                    </div>
                  </div>
                
                {/* input username box */}
                    <div className='flex flex-col'>
                      <label className="color-text text-right text-sm font-normal mb-2">نام کاربری</label>
                      <p className="text-right text-sm text-red-700">
                        {errors.username && touched.username && errors.username}
                      </p>
                      <div className='flex border p-1 color-text bg-white rounded-xl border-gray-200'>
                          <input
                          className="w-full text-xs color-text-placeholder py-2 px-3 text-right" type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.username}
                            name="username" id="username"  placeholder="ایمیل یا کد ملی خود را وارد کنید" />
                          <div className=' flex w-10 justify-center items-center '>
                              <img src={imgusername} className="h-4 w-4" alt="icon username" />
                          </div>
                        </div>
                    </div>


                  {/* input password box */}
                    <div className='flex flex-col py-2'>
                      <div className='flex justify-between'>
                        <a href='#'  className="color-text font-dana text-xs  underline mt-2">رمز عبور خود را فراموش کرده ام</a>
                        <label className="color-text font-dana  text-right text-sm font-normal mb-2"> کلمه عبور</label>
                      </div>
                      <p className="text-right text-sm text-red-700">
                        {errors.password && touched.password && errors.password}
                      </p>
                      <div className='flex border p-1 bg-white rounded-xl border-gray-200'>
                          <input className="  w-full text-xs py-2 px-3 text-right color-text-placeholder"
                           type="password"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            placeholder=" کلمه عبور خود را وارد کنید"/>
                          <div className=' flex w-10 justify-center items-center '>
                              <img src={imgpassword} className="h-4 w-4" alt="icon password" />
                          </div>
                        </div>
                    </div>
                  
                    <div className='flex justify-end'>
                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] ">
                        <input
                          className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="checkbox"
                          value=""
                          id="checkboxDefault" />
                        <label
                          className="inline-block font-medium font-dana   pl-[0.15rem] hover:cursor-pointer"
                          form="checkboxDefault">
                            من را به خاطر داشته باش
                        </label>
                      </div>
                    </div>

                    <button disabled={loading}
                     className='w-full my-5 py-2 color-bg-btn text-white text-sm rounded-lg'>ورود</button>
                    <div className='flex justify-end'>
                      <a href='#'  className="color-text text-sm pr-2 ">ثبت نام </a>
                      <p className="color-text text-sm">کاربر جدید هستید؟</p>
                    </div>
                    <div className='flex justify-center  mt-6'>
                      <p className="color-text text-sm"> یا </p>
                    </div>
                    <div className='flex justify-center color-bg-btn-1 color-text text-sm rounded-lg my-5 py-2 '>
                      <p className=' color-bg-btn-1 color-text text-sm rounded-lg mr-3'> ورود از طریق حساب گوگل</p>
                      <img src={imggmail} className="h-5 w-5" alt="icon password" />
                    </div>

                {iserorr&&(<p className="text-center text-sm text-red-700">{error}</p>)}
                </form>
            </div>
            <div className='hidden sm:block overflow-y-auto'>
                <img className='w-full  h-full object-fill'  src={bgimage} alt="bgimage" />
            </div>
          </div>
         )}
        </Formik>
      </>
  )}
const mapStateToProps = (state:any) => {
    return{
        username:state.auth.username,
        password:state.auth.password,
        loading:state.auth.loading,
        error:state.auth.error,
        iserorr:state.auth.iserorr,
        islogin:state.auth.islogin,
        token:state.auth.token,
    }
}
export default connect(mapStateToProps,{userLogin})(Login)
