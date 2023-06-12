import React from 'react'

const Root = ()=> {
    return (
        <div className="d-flex justify-content-around mt-5" id="sidebar">
         
                <div style={{
                position:'absolute',
                height:'100%',
                width:'50%',
                top:0,
                left:0,
                zIndex:-100,
                backgroundColor: 'blueviolet',
                }}>
                </div>
                <div className="card btn-info" style={{
                position:'relative',
                top:0,
                // borderEndEndRadius:100,
                // borderTopRightRadius:150,
                // zIndex:-99,
                // backgroundColor: 'black',
                padding:20,
            }}>
            <a id="login_page" className='login_page' style={{color:'black',fontSize:20}} href={`Login`}>ورود به صفحه کاربری</a>
                </div>
        </div>
    );
  }

  export default  Root;