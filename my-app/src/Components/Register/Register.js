import React, { Component } from "react";
import "./Register.css";
import ExtraHeader from "../Header/ExtraHeader";

export default class Register extends Component {
  render() {
    return (
      <div>
        <ExtraHeader></ExtraHeader>

        <div className="App pt-3">
          <div className="outer pt-3">
            <div className="bleonaRegister pt-3">
              <div className="inner pt-3">
                <form>
                  <h3>Register</h3>

                  <div className="form-group">
                    <label></label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </div>

                  <div className="form-group">
                    <label></label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                    />
                  </div>

                  <div className="form-group">
                    <label></label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>

                  <div className="form-group">
                    <label></label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                    />
                  </div>

                  <div className="d-grid gap-2 pt-4 ">
                    <button
                      type="submit"
                      className="btn btn-primary  btn-lg btn-block"
                    >
                      Register
                    </button>
                  </div>

                  <p className="forgot-password text-right">
                    Already registered <a href="/Login">log in?</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
