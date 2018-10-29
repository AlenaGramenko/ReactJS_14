import React from 'react';

export default class LoginBlock extends React.Component {
  render() {
    let hideModal = function(){
      $('#myModal').modal('hide'); 
      $('#login_btn').hide();
    }

    return <div>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm" id="login_btn">Login</button>

              <div class="modal fade bs-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" id="myModal">
                <div class="modal-dialog modal-sm" role="document">
                  <div class="modal-content">
                    <div class="modal_contentainer">
                      <form class="form-signin">
                        <h2 class="form-signin-heading">Please sign in</h2>
                        <label for="inputEmail" class="sr-only">Email address</label>
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autoFocus/>
                        <label for="inputPassword" class="sr-only">Password</label>
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                        <div class="checkbox">
                          <label>
                            <input type="checkbox" value="remember-me"/> Remember me
                          </label>
                        </div>
                        <button id="login_btn" class="btn btn-lg btn-primary btn-block" type="submit" onClick={hideModal}>Sign in</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>;
  }
}