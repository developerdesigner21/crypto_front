"use client";

import GoBackButton from "./BackButton";

export default function ChangePass() {
  return (
    <>
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="#" className="left back-btn">
          <GoBackButton />
        </a>
        <h3>Change login password</h3>
      </div>
      <div className="pt-45 pb-16">
        <div className="tf-container">
          <form onSubmit={(e) => e.preventDefault()}>
            <fieldset className="mt-4">
              <label className="mb-8">Current password</label>
              <div className="box-auth-pass">
                <input
                  type="password"
                  required
                  placeholder="Enter current password"
                  className="password-field"
                />
                <span className="show-pass">
                  <i className="icon-view" />
                  <i className="icon-view-hide" />
                </span>
              </div>
            </fieldset>
            <fieldset className="mt-16">
              <label className="mb-8">New login password</label>
              <div className="box-auth-pass">
                <input
                  type="password"
                  required
                  placeholder="Enter your new password"
                  className="password-field"
                />
                <span className="show-pass">
                  <i className="icon-view" />
                  <i className="icon-view-hide" />
                </span>
              </div>
            </fieldset>
            <ul className="mt-16">
              <li className="d-flex gap-4 align-items-center">
                <input
                  type="checkbox"
                  className="tf-checkbox style-2"
                  id="cb1"
                  defaultChecked
                />
                <label className="text-small text-white" htmlFor="cb1">
                  8 - 32 characters long
                </label>
              </li>
              <li className="mt-12 d-flex gap-4 align-items-center">
                <input
                  type="checkbox"
                  className="tf-checkbox style-2"
                  id="cb2"
                  defaultChecked
                />
                <label className="text-small text-white" htmlFor="cb2">
                  1 lowercase character
                </label>
              </li>
              <li className="mt-12 d-flex gap-4 align-items-center">
                <input
                  type="checkbox"
                  className="tf-checkbox style-2"
                  id="cb3"
                  defaultChecked
                />
                <label className="text-small text-white" htmlFor="cb3">
                  1 uppercase character
                </label>
              </li>
              <li className="mt-12 d-flex gap-4 align-items-center">
                <input
                  type="checkbox"
                  className="tf-checkbox style-2"
                  id="cb4"
                  defaultChecked
                />
                <label className="text-small text-white" htmlFor="cb4">
                  1 number
                </label>
              </li>
              <li className="mt-12 d-flex gap-4 align-items-center">
                <input
                  type="checkbox"
                  className="tf-checkbox style-2"
                  id="cb5"
                  defaultChecked
                />
                <label className="text-small text-white" htmlFor="cb5">
                  1 symbol
                </label>
              </li>
            </ul>
            <fieldset className="mt-16">
              <label className="mb-8">Confirm new login password</label>
              <div className="box-auth-pass">
                <input
                  type="password"
                  required
                  placeholder="Enter your new password"
                  className="password-field"
                />
                <span className="show-pass">
                  <i className="icon-view" />
                  <i className="icon-view-hide" />
                </span>
              </div>
            </fieldset>
            <button className="mt-40 tf-btn lg">Confirm</button>
          </form>
        </div>
      </div>
    </>
  );
}
