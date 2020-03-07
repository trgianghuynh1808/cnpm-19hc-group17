const key = 'cars@carrental';
const API_URL = `${process.env.REACT_APP_CARRENTAL_API_URL}`;

export function getCarByBrands() {
    // const localStorage = window.localStorage;
    // const listCarLocal = localStorage.getItem(key);
    return fetch(`${API_URL}/brands`).then((res) => {
      return res.json();
    });
}

export function getGallery(offset, limit) {
  return fetch(`${API_URL}/cars?offset=${offset}&limit=${limit}`).then((res) => {
    return res.json();
  });
}