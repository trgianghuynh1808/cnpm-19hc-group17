import { makeFetchAction } from "redux-api-call";
import Router from "next/router";

import {
  respondToSuccess,
  respondToFailure,
} from "../middlewares/api-reaction";
import nfetch from "../../libs/nfetch";

export const CREATE_CONTRACT_API = "CREATE_CONTRACT_API";

const CreateContractAPI = makeFetchAction(
  CREATE_CONTRACT_API,
  ({ startRentDate, endRentDate, name, phone, email, address, carId }) => {
    return nfetch({
      endpoint: `/contracts`,
    })({
      start_rent_date: startRentDate,
      end_rent_date: endRentDate,
      name,
      phone_number: phone,
      email,
      address,
      car_id: carId,
    });
  }
);

export const createContract = ({
  startRentDate,
  endRentDate,
  name,
  phone,
  email,
  address,
  carId,
}) => {
  return respondToSuccess(
    CreateContractAPI.actionCreator({
      startRentDate,
      endRentDate,
      name,
      phone,
      email,
      address,
      carId,
    }),
    (resp) => {
      if (resp.errors) {
        console.error("Err: ", resp.errors);
        return;
      }

      Router.push("/");

      return;
    }
  );
};

export default {};
