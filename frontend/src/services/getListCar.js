const key = 'cars@carrental';
const url = 'http://35.240.255.193:9900/brands';

export default function getListCar() {
    // const localStorage = window.localStorage;
    // const listCarLocal = localStorage.getItem(key);
    return fetch(url).then((res) => {
      return res.json();
    });
}