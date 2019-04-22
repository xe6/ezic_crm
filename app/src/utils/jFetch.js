export const jFetch = (url, params = {}) => {
  return fetch(url, params).then((res) => res.json());
};
