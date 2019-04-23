export const jFetch = (url, params = {}) => {
  return fetch(url, params).then((res) => res.json());
};

export const aFetch = (url, params = {}) => {
  let token = localStorage.getItem("jwtToken");
  if(!token) throw new Error("Failed to locate token in LS");

  if(!params.headers) params.headers = {
    "Content-Type": "application/json",
    "Authorization": token
  };
  
  return fetch(url, params).then((res) => res.json());
  
}