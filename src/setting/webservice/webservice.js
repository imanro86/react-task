
// base url
const Base_Url = 'https://reqres.in/';
const Base_Url1 = 'https://moviesapi.ir/';

const Url_Login=Base_Url + "api/login";
const Url_GetMovies=Base_Url1 + "api/v1/movies";


class Webservice {

   // =============================================
  // Get movies
  // =============================================
  static GetMovies() {
    
    var requestOptions = {
      method: 'get',
      redirect: 'follow'
    };

    //   request 
    return new Promise((resolv, reject) => {
        fetch(Url_GetMovies, requestOptions)
        .then(response => response.json())
        .then(response => {
          resolv(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
   // =============================================
  // login user 
  // =============================================
  static Login(email,password) {
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({"email":email,"password":password});
    
    var requestOptions = {
      method: 'post',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    //   request 
    return new Promise((resolv, reject) => {
        fetch(Url_Login, requestOptions)
        .then(response => response.json())
        .then(response => {
          resolv(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

}
// 



export default Webservice;