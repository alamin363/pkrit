import React from "react";
import "./Login.css"
const Login = () => {
  return (
    <section id="formSection">
      <div class="container">
        <form action="" method="" onSubmit={""}>
          <div class="mainForm">
            <h3>Log In</h3>
            <div class="inputBox">
              <span>Username:</span>
              <div class="inp_field">
                <input type="text" name="username" value="" />
                <i class="fa fa-user form_icon"></i>
              </div>
            </div>
            <div class="inputBox">
              <span>Password:</span>
              <div class="inp_field">
                <input type="password" name="password" />
                <i class="fa fa-key form_icon"></i>
              </div>
            </div>
            <input
              type="hidden"
              value="<?php echo $csrfTocken ?>"
              name="csrfTocken"
            />
            <div class="inputBox">
              <span></span>
              <input type="submit" name="login" value="Log In" />
            </div>
            <a href="#" class="passwordReset">
              Forgotten Password?
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
