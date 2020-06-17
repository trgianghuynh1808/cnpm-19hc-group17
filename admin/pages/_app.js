import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";

import makeStore from "../stores";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={makeStore()}>
      <Component {...pageProps} />
      <ToastContainer closeButton={false} />
    </Provider>
  );
}

export default MyApp;
