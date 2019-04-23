export const jFetch = (url, params = {}) => {
  return fetch(url, params).then((res) => res.json());
};

export const aFetch = (url, params = {}) => {
  let token = localStorage.getItem("jwtToken");

  //Silently abandon request when there is no token in LS
  if(!token) {
    return new Promise((resolve, reject) => {
      resolve({
        success: false,
        data: null
      })
    });
  }

  if(!params.headers) params.headers = {
    "Content-Type": "application/json",
    "Authorization": token
  };
  
  return fetch(url, params).then((res) => res.json());
  
}