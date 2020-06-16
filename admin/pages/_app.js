import { Provider } from "react-redux";
import makeStore from "../stores";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={makeStore()}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
