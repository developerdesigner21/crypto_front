import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notifications } from "@/data/notifications";

export default function Header1() {
  return (
    <>
      <div className="header-style2 fixed-top bg-menuDark">
        <div className="d-flex justify-content-between align-items-center gap-14">
          <div className="box-account style-2">
            <Link href={`/user-info`}>
              <Image
                alt="img"
                className="avt"
                src="/images/avt/avt2.jpg"
                width={120}
                height={120}
              />
            </Link>
            <div className="search-box box-input-field style-2">
              <a href={`/home-search`} className="icon-search" />
              <input
                type="text"
                placeholder="Looking for crypto"
                required
                className="clear-ip"
              />
              <i className="icon-close" />
            </div>
          </div>
          <div className="d-flex align-items-center gap-8">
            <Link href={`/list-blog`} className="icon-gift" />
            <a
              href="#notification"
              className="icon-noti box-noti"
              data-bs-toggle="modal"
            />
          </div>
        </div>
      </div>{" "}
      <div className="modal fade modalRight" id="notification">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
              <span className="left" data-bs-dismiss="modal" aria-hidden="true">
                <i className="icon-left-btn" />
              </span>
              <h3>Notification</h3>
            </div>
            <div className="overflow-auto pt-45 pb-16">
              <div className="tf-container">
                <ul className="mt-12">
                  {notifications.map((notification, index) => (
                    <li className={notification.additionalClasses} key={index}>
                      <a href="#" className="noti-item bg-menuDark">
                        <div
                          className={`pb-8 line-bt ${
                            notification.hasIcon ? "d-flex" : ""
                          }`}
                        >
                          <p
                            className={`text-button fw-6 ${
                              notification.isSecondary ? "text-secondary" : ""
                            }`}
                          >
                            {notification.content}
                          </p>
                          {notification.hasIcon && (
                            <i className="dot-lg bg-primary" />
                          )}
                        </div>
                        <span
                          className={`d-block mt-8 ${
                            notification.isSecondary ? "text-secondary" : ""
                          }`}
                        >
                          {notification.time}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
