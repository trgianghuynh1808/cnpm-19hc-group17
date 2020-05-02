import React, { useEffect, useState } from "react";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import FormFields from "../../../components/commons/ReduxFormFields";
import { getProfileUser, GetProfileUserAPI, updateProfileUser } from "../../../stores/UsersState";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const {
  InputRenderFieldComponent,
} = FormFields;

const connectToRedux = connect(
  createStructuredSelector({
    profileUserData: GetProfileUserAPI.dataSelector,
  }),
  (dispatch) => ({
    getProfileUser: () => {
      dispatch(getProfileUser());
    },
    updateProfileUser: (updatedProfile, callback) => {
      dispatch(updateProfileUser(updatedProfile, callback));
    },
  })
);
const enhance = compose(
  reduxForm({
    form: "profile-form",
  }),
  connectToRedux
);

const Profile = (props) => {
    const {
      getProfileUser,
      profileUserData,
      initialize,
      pristine,
      submitting,
      reset,
      handleSubmit,
      updateProfileUser
    } = props;
    const  [ isEditable, setIsEditable ] = useState(false);
    const  [ isUpdated, setIsUpdated ] = useState(false);

    useEffect(()=> getProfileUser(), [getProfileUser]);
    useEffect(()=> {
      if(profileUserData) {
        const { user } = profileUserData;
        const { name = '', address = '', phone_number = '', gender = '', email = '' } = user;
        initialize({
          fullname: name,
          phoneNumber: phone_number,
          email,
          address,
        });
      }
    }, [profileUserData, initialize]);

    const submitProfileHandle = (values) => {
      const { fullname, phoneNumber, email, address } = values;

      const updatedProfile = {
        name: fullname,
        phone_number: phoneNumber,
        email,
        address,
      };
      updateProfileUser(updatedProfile, () => {
        setIsEditable(false);
        setIsUpdated(true);
      });
    };

    return (
        <div className="col-lg-8" >
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="wizard-container">
                  <div className="card wizard-card" data-color="orange" id="wizardProfile">
                    <form onSubmit={handleSubmit(submitProfileHandle)}>
                      <div className="wizard-header">
                        <h3>
                          <b>YOUR</b> PROFILE <br />
                          <small>This information will let us know more about you.</small>
                        </h3>
                      </div>
                      <div className="tab-content">
                          <div className="row">
                            <div className="col-sm-4 col-sm-offset-1">
                              <div className="picture-container">
                                <div className="picture">
                                  <img alt="" src="assets/img/default-avatar.png" className="picture-src" id="wizardPicturePreview"/>
                                  <input type="file" id="wizard-picture" />
                                </div>
                                {isEditable && <h6>Choose Picture</h6>}
                              </div>
                            </div>
                            <div className="col-sm-6">
                            <button onClick={() => {
                              if(pristine) {
                                setIsEditable(true);
                                setIsUpdated(false);
                              } else {
                                reset();
                                setIsEditable(false);
                              }
                              }
                              } type="button" id="EDIT-BTN" className={
                                `btn ${isUpdated || pristine  ? 'btn-primary' : 'btn-danger' }`}>
                                  {isUpdated || pristine ? 'Edit' : 'Cancel'}
                              </button>
                              <div className="form-group">
                                <label>Full Name <small></small></label>
                                  <Field
                                    name="fullname"
                                    component={InputRenderFieldComponent}
                                    type="text"
                                    readOnly={!isEditable}
                                />
                              </div>
                              <div className="form-group">
                                <label>Phone Number <small></small></label>
                                <Field
                                    name="phoneNumber"
                                    component={InputRenderFieldComponent}
                                    type="text"
                                    required
                                    pattern={`([0-9]{9,})`}
                                    readOnly={!isEditable}
                                />
                              </div>
                            </div>
                            <div className="col-sm-10 col-sm-offset-1">
                            <div className="form-group">
                                <label>Address <small></small></label>
                                <Field
                                    name="address"
                                    component={InputRenderFieldComponent}
                                    type="text"
                                    readOnly={!isEditable}
                                />
                              </div>
                              <div className="form-group">
                                <label>Email <small></small></label>
                                <Field
                                    name="email"
                                    component={InputRenderFieldComponent}
                                    type="email"
                                    readOnly={!isEditable}
                                />
                              </div>
                            </div>
                            <div className="col-sm-6 col-sm-offset-6">
                              {isEditable && <button
                                disabled={pristine || submitting}
                                type="submit" id="SUBMIT-BTN" className="btn btn-success">Submit
                              </button>}
                            </div>
                          </div>
                      </div>
                    </form>
                  </div>
                </div> 
              </div>
            </div>
          </div>
      </div>      
    );
}

export default enhance(Profile);
