const API_URL = `${process.env.REACT_APP_CARRENTAL_API_URL}`;

export default function getCarByBrands(carID) {
    return fetch(`${API_URL}/cars/${carID}`).then((res) => {
      return res.json();
    });
}