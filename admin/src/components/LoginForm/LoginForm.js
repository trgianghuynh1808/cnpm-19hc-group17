import React from 'react';

export default (props) => {
  const { onChange, onSubmit } = props;
    return (
      <div className="tab-content">
        <div className="tab-pane tabs-animation fade show active" id="tab-content-0" role="tabpanel">
          <div className="main-card mb-3 card">
            <div className="card-body"><h5 className="card-title">Login into dashboard</h5>
              <form id="LOGIN_FORM">
                <div className="form-row">
                  <div className="col-md-6">
                    <div className="position-relative form-group">
                      <label htmlFor="username">
                        Username
                      </label>
                        <input onChange={()=> onChange('username')}  name="username" id="username" placeholder="Enter your username" type="text" className="form-control" required />
                      </div>
                  </div>
                  <div className="col-md-6">
                    <div className="position-relative form-group">
                      <label htmlFor="password">
                        Password
                      </label>
                      <input onChange={()=> onChange('password')} name="password" id="password" placeholder="Enter your password" type="password" className="form-control" required />
                    </div>
                  </div>
                </div>
                <div onClick={onSubmit}>
                <button className="mt-2 btn btn-primary">
                  Login
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}