import React from 'react';

export default class LoginBlock extends React.Component {
  render() {
    let hideModal = function(){
      $('#myModal').modal('hide'); 
      $('#login_btn').hide();
    }

    return <div>
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm" id="login_btn">Login</button>

              <div className="modal fade bs-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" id="myModal">
                <div className="modal-dialog modal-sm" role="document">
                  <div className="modal-content">
                    <div className="modal_contentainer">
                      <form className="form-signin">
                        <h2 className="form-signin-heading">Please sign in</h2>
                        <label for="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
                        <label for="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" value="remember-me"/> Remember me
                          </label>
                        </div>
                        <button id="login_btn" className="btn btn-lg btn-primary btn-block" type="submit" onClick={hideModal}>Sign in</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>;
  }
}