"use client";

import { useState } from "react";
import GoBackButton from "./BackButton";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  return (
    <>
      <>
        <div className="header fixed-top bg-surface">
          <a href="#" className="left back-btn">
            <GoBackButton />
          </a>
        </div>
        <div className="pt-45">
          <div className="tf-container">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                router.push("/home");
              }}
              className="mt-32 mb-16"
            >
              <h2 className="text-center">Register Cointex</h2>
              <fieldset className="mt-40">
                <label className="label-ip">
                  <p className="mb-8 text-small">Name</p>
                  <input type="text" defaultValue="Tony Nguyen" />
                </label>
              </fieldset>
              <fieldset className="mt-16">
                <label className="label-ip">
                  <p className="mb-8 text-small">Email</p>
                  <input type="text" placeholder="Example@gmail" />
                </label>
              </fieldset>
              <fieldset className="mt-16">
                <label className="label-ip">
                  <p className="mb-8 text-small">Phone Number</p>
                  <input type="text" placeholder="Phone number" />
                </label>
              </fieldset>
              <fieldset className="mt-16">
                <label className="label-ip">
                  <p className="mb-8 text-small">Password</p>
                  <div className="box-auth-pass">
                    <input
                      type={`${showPass ? "text" : "password"}`}
                      required
                      placeholder="6 -20 characters"
                      className="password-field"
                    />
                    <span
                      onClick={() => setShowPass((pre) => !pre)}
                      className={`show-pass  `}
                    >
                      <i className="icon-view" />
                      <i className="icon-view-hide" />
                    </span>
                  </div>
                </label>
              </fieldset>
              <fieldset className="mt-16">
                <label className="label-ip">
                  <p className="mb-8 text-small">Confirm Password</p>
                  <div className="box-auth-pass">
                    <input
                      type={`${showPass2 ? "text" : "password"}`}
                      required
                      placeholder="confirm password"
                      className="password-field2"
                      defaultValue={12345}
                    />
                    <span
                      onClick={() => setShowPass2((pre) => !pre)}
                      className={`show-pass2  ${showPass2 ? "active" : ""} `}
                    >
                      <i className="icon-view" />
                      <i className="icon-view-hide" />
                    </span>
                  </div>
                </label>
              </fieldset>
              <fieldset className="group-cb cb-signup mt-12">
                <input
                  type="checkbox"
                  className="tf-checkbox"
                  id="cb-ip"
                  defaultChecked
                />
                <label htmlFor="cb-ip">
                  I agree to
                  <span className="text-white">Terms and condition</span>
                </label>
              </fieldset>
              <button className="mt-40">Create an account</button>
            </form>
          </div>
        </div>
      </>
    </>
  );
}
