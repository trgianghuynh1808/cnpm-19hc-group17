import React from 'react';

export default (props) => {
  const { onChange, onSubmit } = props;
    return (
      <div className="limiter">
<div className="container-login100" style={{backgroundImage: 'url(bg-01.jpg)'}}>
  <div className="wrap-login100 p-t-30 p-b-50">
    <span className="login100-form-title p-b-41">
      Account Login
    </span>
    <form id="LOGIN_FORM" className="login100-form validate-form p-b-33 p-t-5">

      <div className="wrap-input100 validate-input" data-validate = "Enter username">
        <input onChange={()=> onChange('username')} id="username" className="input100" type="text" name="username" placeholder="User name"  required />
        <span className="focus-input100" data-placeholder="&#xe82a;"></span>
      </div>

      <div className="wrap-input100 validate-input" data-validate="Enter password">
        <input onChange={()=> onChange('password')} name="password" id="password" className="input100" type="password" placeholder="Password" required />
        <span className="focus-input100" data-placeholder="&#xe80f;"></span>
      </div>  

      <div onClick={onSubmit} className="container-login100-form-btn m-t-32">
        <button className="login100-form-btn">
          Login
        </button>
      </div>

    </form>
  </div>
</div>
</div>
      // <div className="tab-content">
      //   <div className="tab-pane tabs-animation fade show active" id="tab-content-0" role="tabpanel">
      //     <div className="main-card mb-3 card">
      //       <div className="card-body"><h5 className="card-title">Login into dashboard</h5>
      //         <form id="LOGIN_FORM">
      //           <div className="form-row">
      //             <div className="col-md-6">
      //               <div className="position-relative form-group">
      //                 <label htmlFor="username">
      //                   Username
      //                 </label>
      //                   <input onChange={()=> onChange('username')}  name="username" id="username" placeholder="Enter your username" type="text" className="form-control" required />
      //                 </div>
      //             </div>
      //             <div className="col-md-6">
      //               <div className="position-relative form-group">
      //                 <label htmlFor="password">
      //                   Password
      //                 </label>
      //                 <input onChange={()=> onChange('password')} name="password" id="password" placeholder="Enter your password" type="password" className="form-control" required />
      //               </div>
      //             </div>
      //           </div>
      //           <div onClick={onSubmit}>
      //           <button className="mt-2 btn btn-primary">
      //             Login
      //           </button>
      //           </div>
      //         </form>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
}

