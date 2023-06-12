

import React ,{useEffect, useCallback, useState}from 'react'


import {useNavigate} from 'react-router-dom';

import { connect} from 'react-redux';
import { getMovies,deleteMovies } from '../../action/moviesAction';
import Card from '../../components/cards/cardmovies';


const Home =(props:any)=>{
    
    const {islogin ,getMovies,movies,deleteMovies}= props;

     const navigate = useNavigate();
     const handlePath = useCallback((url:any) =>navigate(url,{replace: true}), [navigate]);

     useEffect(()=>{
         if(!islogin){
             handlePath("./Login")
            }else{
                getMovies()
             }
        },[])
      
      const [selectId , setSelectId] = useState(0)

    return(
           <div className='flex flex-wrap bg-slate-300 justify-center'>
                {   movies.data && 
                    movies.data.map((item:any,index:any)=>{
                        return <Card index={index} onDelete={(e)=>deleteMovies(movies,e)}  selectedit={selectId} onEdit={(e)=>setSelectId(e)} items ={item}/>
                    })
                }
          </div> 
    )
    }

    const mapStateToProps = (state:any) => {
        console.log(state);
          return{
              loading:state.movies.loading,
              error:state.movies.error,
              iserorr:state.movies.iserorr,
              islogin:state.auth.islogin,
              movies:state.movies.data
          }
         };
        
    export default connect(mapStateToProps,{getMovies,deleteMovies})(Home) ;
        