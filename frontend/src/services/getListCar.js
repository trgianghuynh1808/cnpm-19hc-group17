const key = 'cars@carrental';
const url = `${process.env.REACT_APP_CARRENTAL_API_URL}/brands`;

export default function getListCar() {
    // const localStorage = window.localStorage;
    // const listCarLocal = localStorage.getItem(key);
    return fetch(url).then((res) => {
      return res.json();
    });
}