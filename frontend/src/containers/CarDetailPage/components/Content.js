import React, { useState, useEffect } from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import moment from "moment";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import ModalComponent from "../../../components/commons/ModalComponent";
import FormFields from "../../../components/commons/ReduxFormFields";
import { DATE_FORMAT, PERCENT_DEPOSIT_FEE } from "../../../utils/enums";
import {
  createContractUser,
  getProfileUser,
  GetProfileUserAPI,
} from "../../../stores/UsersState";
import ContractAgreementComponent from "./ContractAgreementComponent";

const {
  InputRenderFieldComponent,
  DateTimeRenderFieldComponent,
  TextAreaRenderFieldComponent,
} = FormFields;

const selector = formValueSelector("booking-form");
const senderNameSelector = (state) => selector(state, "fullname");

const connectToRedux = connect(
  createStructuredSelector({
    profileUserData: GetProfileUserAPI.dataSelector,
    senderNameBookingForm: senderNameSelector,
  }),
  (dispatch) => ({
    createContractUser: (objBody, callback) => {
      dispatch(createContractUser(objBody, callback));
    },
    getProfileUser: () => {
      dispatch(getProfileUser());
    },
  })
);

const enhance = compose(
  reduxForm({
    form: "booking-form",
  }),
  connectToRedux
);

const Content = ({
  brand = "",
  model = "",
  color = "",
  seat = "",
  rent_price = "",
  image,
  license_plate = "",
  handleSubmit,
  pristine,
  submitting,
  initialize,
  reset,
  id,
  createContractUser,
  getProfileUser,
  profileUserData,
  senderNameBookingForm,
}) => {
  const [isOpenBookingModal, setIsOpenBookingModal] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [isOpenContractModal, setIsOpenContractModal] = useState(false);

  useEffect(() => {
    getProfileUser();
  }, [getProfileUser]);

  const submitBookingHandle = (values) => {
    if (values.startDate && values.endDate) {
      const { identityCard, fullname, phoneNumber, email, address } = values;

      const objBody = {
        car_id: id,
        start_rent_date: values.startDate.format(DATE_FORMAT),
        end_rent_date: values.endDate.format(DATE_FORMAT),
        identity_id: identityCard,
        name: fullname,
        phone_number: phoneNumber,
        email,
        note: values.note || "",
        address,
      };

      createContractUser(objBody, () => {
        reset();
        setIsOpenBookingModal(false);
      });
    }
  };

  return (
    <section id="car-list-area" className="section-padding">
      <div className="container">
        <div className="row">
          {/* Car List Content Start */}
          <div className="col-lg-8">
            <div className="car-details-content">
              <h2>
                {model.toUpperCase()}{" "}
                <span className="price">
                  Rent: <b>${rent_price}</b>
                </span>
              </h2>
              <div className="car-preview-crousel">
                <div className="single-car-preview">
                  <img
                    src={image}
                    alt="JSOFT"
                  />
                </div>
              </div>
              <div className="car-details-info">
                <h4>Additional Info</h4>
                <p>
                  The Aventador LPER 720-4 50° ise a limited (200 units – 100
                  Coupe and 100 Roadster) versione of thed Aventadored LP 700-4
                  commemorating the 50th anniversary of Lamborghini. It included
                  ised increased engine power to 720 PS (530 kW; 710 bhp) via a
                  new specific engine calibration, enlarged and extended front
                  air intakes and the aerodynamic splitter.
                </p>
                <div className="technical-info">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="tech-info-table">
                        <table className="table table-bordered">
                          <tbody>
                            <tr>
                              <th>Brand</th>
                              <td>{brand.toUpperCase()}</td>
                            </tr>
                            <tr>
                              <th>Color</th>
                              <td>{color.toUpperCase()}</td>
                            </tr>
                            <tr>
                              <th>Seats</th>
                              <td>{seat}</td>
                            </tr>
                            <tr>
                              <th>License Plate</th>
                              <td>{license_plate.toUpperCase()}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="tech-info-list">
                        <ul>
                          <li>ABS</li>
                          <li>Air Bags</li>
                          <li>Bluetooth</li>
                          <li>Car Kit</li>
                          <li>GPS</li>
                          <li>Music</li>
                          <li>Bluetooth</li>
                          <li>ABS</li>
                          <li>GPS</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="input-submit">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpenBookingModal(true);
                      if (profileUserData) {
                        const {
                          name,
                          identity_id,
                          phone_number,
                          email,
                          address,
                        } = profileUserData.user;

                        initialize({
                          fullname: name,
                          identityCard: identity_id,
                          phoneNumber: phone_number,
                          email,
                          address,
                        });
                      }
                    }}
                  >
                    Booking Now
                  </button>
                </div> */}
                <ModalComponent
                  modalIsOpen={isOpenBookingModal}
                  setIsOpen={setIsOpenBookingModal}
                >
                  <form onSubmit={handleSubmit(submitBookingHandle)}>
                    <div className="container">
                      <div className="row justify-content-between p-2">
                        <h4 style={{ color: "#fabf21" }}>Booking Info</h4>
                        <h5>
                          Deposit fee: $
                          {(rent_price * PERCENT_DEPOSIT_FEE) / 100}
                        </h5>
                      </div>
                      <div className="row pt-3">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Full Name: </label>
                            <Field
                              name="fullname"
                              component={InputRenderFieldComponent}
                              placeholder="Enter full name"
                              type="text"
                              required
                              readOnly={profileUserData ? true : false}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Identity Card:</label>
                            <Field
                              name="identityCard"
                              component={InputRenderFieldComponent}
                              placeholder="Enter identity card:"
                              type="text"
                              required
                              readOnly={profileUserData ? true : false}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Email address</label>
                            <Field
                              name="email"
                              type="email"
                              component={InputRenderFieldComponent}
                              placeholder="Enter email"
                              required
                              readOnly={profileUserData ? true : false}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Phone Number:</label>
                            <Field
                              name="phoneNumber"
                              component={InputRenderFieldComponent}
                              placeholder="Enter phone number"
                              type="text"
                              required
                              pattern={`([0-9]{9,})`}
                              readOnly={profileUserData ? true : false}
                            />
                            <small className="form-text text-muted">
                              Phone number must has least 9 numbers
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="form-group">
                            <label>Address: </label>
                            <Field
                              name="address"
                              component={InputRenderFieldComponent}
                              placeholder="Enter address"
                              type="text"
                              required
                              readOnly={profileUserData ? true : false}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Start Date</label>
                            <Field
                              name="startDate"
                              component={DateTimeRenderFieldComponent}
                              isValidDate={(currentDate) => {
                                const nowTime = moment();
                                return moment(currentDate).isAfter(nowTime);
                              }}
                              onChange={(selectedDate) => {
                                const dateFormatted = selectedDate.format(
                                  DATE_FORMAT
                                );
                                setStartDate(dateFormatted);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>End Date</label>
                            <Field
                              name="endDate"
                              component={DateTimeRenderFieldComponent}
                              isValidDate={(currentDate) => {
                                return moment(currentDate).isAfter(startDate);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="form-group">
                            <label>Note</label>
                            <Field
                              name="note"
                              component={TextAreaRenderFieldComponent}
                              placeholder="Enter note"
                              rows="3"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          By clicking submit you are agreeing to{" "}
                          <span
                            className="text-primary"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setIsOpenContractModal(true);
                            }}
                          >
                            The content of contract.
                          </span>
                        </div>
                      </div>
                      <div className="row justify-content-center">
                        <div className="input-submit">
                          <button
                            type="submit"
                            disabled={pristine || submitting}
                          >
                            Submit
                          </button>
                          <button
                            disabled={pristine || submitting}
                            onClick={reset}
                          >
                            Clear
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <ContractAgreementComponent
                    isOpenContractModal={isOpenContractModal}
                    setIsOpenContractModal={setIsOpenContractModal}
                    infoContract={{
                      senderName: senderNameBookingForm,
                      carInfo: {
                        brand,
                        model,
                        color,
                        seat,
                        rentPrice: rent_price,
                        depositPrice: (rent_price * PERCENT_DEPOSIT_FEE) / 100,
                      },
                    }}
                  />
                </ModalComponent>

                <div className="review-area">
                  <h3>Be the first to review “{model.toUpperCase()}”</h3>
                  <div className="review-star">
                    <p className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star unmark" />
                      <i className="fa fa-star unmark" />
                    </p>
                  </div>
                  <div className="review-form">
                    <form action="index.html">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="name-input">
                            <input type="text" placeholder="Full Name" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="email-input">
                            <input type="email" placeholder="Email Address" />
                          </div>
                        </div>
                      </div>
                      <div className="message-input">
                        <textarea
                          name="review"
                          cols={30}
                          rows={5}
                          placeholder="Write Your Feedback Here!"
                          defaultValue={""}
                        />
                      </div>
                      <div className="input-submit">
                        <button type="submit">Submit</button>
                        <button type="reset">Clear</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Car List Content End */}
        </div>
      </div>
    </section>
  );
};

export default enhance(Content);
