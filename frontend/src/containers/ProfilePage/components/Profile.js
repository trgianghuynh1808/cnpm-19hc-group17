import React from "react";

const Profile = () => {
    return (
        <div className="col-lg-8" >
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                {/*      Wizard container        */}
                <div className="wizard-container">
                  <div className="card wizard-card" data-color="orange" id="wizardProfile">
                    <form action method>
                      {/*        You can switch ' data-color="orange" '  with one of the next bright colors: "blue", "green", "orange", "red"          */}
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
                                  <img src="assets/img/default-avatar.png" className="picture-src" id="wizardPicturePreview" title />
                                  <input type="file" id="wizard-picture" />
                                </div>
                                <h6>Choose Picture</h6>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label>First Name <small>(required)</small></label>
                                <input name="firstname" type="text" className="form-control" placeholder="Andrew..." />
                              </div>
                              <div className="form-group">
                                <label>Last Name <small>(required)</small></label>
                                <input name="lastname" type="text" className="form-control" placeholder="Smith..." />
                              </div>
                            </div>
                            <div className="col-sm-10 col-sm-offset-1">
                              <div className="form-group">
                                <label>Email <small>(required)</small></label>
                                <input name="email" type="email" className="form-control" placeholder="andrew@creative-tim.com" />
                              </div>
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

export default Profile;
