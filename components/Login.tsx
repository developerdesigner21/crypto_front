"use client";

import Link from "next/link";
import GoBackButton from "./BackButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter();

  return (
    <>
      <div className="header fixed-top bg-surface">
        <a href="#" className="left back-btn">
          <GoBackButton />
        </a>
      </div>
      <div className="pt-45 pb-20">
        <div className="tf-container">
          <div className="mt-32">
            <h2 className="text-center">Login Cointex</h2>
            <ul className="mt-40 socials-login">
              <li className="mt-12">
                <Link href={`/home`} className="tf-btn md social dark">
                  <Image
                    alt="img"
                    src="/images/logo/fb.jpg"
                    width={31}
                    height={31}
                  />
                  Continue with Facebook
                </Link>
              </li>
              <li className="mt-12">
                <Link href={`/home`} className="tf-btn md social dark">
                  <Image
                    alt="img"
                    src="/images/logo/google.jpg"
                    width={21}
                    height={20}
                  />
                  Continue with Google
                </Link>
              </li>
              <li className="mt-12">
                <Link href={`/home`} className="tf-btn md social dark">
                  <Image
                    alt="img"
                    src="/images/logo/apple.jpg"
                    width={21}
                    height={20}
                  />
                  Continue with Apple
                </Link>
              </li>
            </ul>
          </div>
          <div className="auth-line mt-12">Or</div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              router.push("/home");
            }}
            className="mt-16"
          >
            <fieldset className="mt-16">
              <label className="label-ip">
                <p className="mb-8 text-small">Email</p>
                <input type="email" placeholder="Example@gmail" />
              </label>
            </fieldset>
            <fieldset className="mt-16 mb-12">
              <label className="label-ip">
                <p className="mb-8 text-small">Password</p>
                <div className="box-auth-pass">
                  <input
                    type="password"
                    required
                    placeholder="Your password"
                    className="password-field"
                  />
                  <span className="show-pass">
                    <i className="icon-view" />
                    <i className="icon-view-hide" />
                  </span>
                </div>
              </label>
            </fieldset>
            <Link href={`/reset-pass`} className="text-secondary">
              Forgot Password?
            </Link>
            <button className="mt-20">Login</button>
            <p className="mt-20 text-center text-small">
              Already have a Account?  <Link href={`/register`}>Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
