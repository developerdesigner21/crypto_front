"use client";

import { useState } from "react";
import GoBackButton from "../BackButton";

// Define the type for the items in the list
interface Item {
  label?: string;
  active?: boolean;
}

const items: Item[] = [
  { label: "Citizen identification", active: true },
  { label: "Driving license", active: false },
  { label: "ID card", active: false },
  { label: "Passport", active: false },
  { label: "Arc", active: false },
];
export default function VarificationChooiceType() {
  const [activeItem, setActiveItem] = useState<Item>({});
  return (
    <>
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="#" className="left back-btn">
          <GoBackButton />
        </a>
        <h3>Verification</h3>
        <a href="#" className="right">
          <i className="icon-question" />
        </a>
      </div>
      <div className="pt-45 pb-16">
        <div className="tf-container">
          <h4 className="mt-4">Choose the type of identification document</h4>
          <form onSubmit={(e) => e.preventDefault()} className="mt-20">
            <fieldset>
              <label className="mb-8">Country/region of residence</label>
              <div className="select-wrapper">
                <select className="tf-select">
                  <option>USA</option>
                  <option>ENG</option>
                  <option>INDIA</option>
                </select>
              </div>
            </fieldset>
            <fieldset className="mt-20">
              <label className="mb-8">Type of identification (ID)</label>
              <div
                className="select-wrapper"
                data-bs-toggle="modal"
                data-bs-target="#identificationID"
              >
                <p className="tf-select dom-text">
                  {activeItem.label ? activeItem.label : "Select ID type"}
                </p>
              </div>
            </fieldset>
            <button className="tf-btn lg primary mt-40">Next</button>
          </form>
        </div>
      </div>
      <div className="modal fade action-sheet" id="identificationID">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span>Type of identification (ID)</span>
              <span className="icon-cancel" data-bs-dismiss="modal" />
            </div>
            <ul className="mt-20 pb-16">
              {items.map((item, index) => (
                <li
                  onClick={() =>
                    setActiveItem((pre) => (pre == item ? {} : item))
                  }
                  key={index}
                  className={`${index != 0 ? "line-bt" : ""}`}
                  data-bs-dismiss="modal"
                >
                  <div
                    className={`d-flex justify-content-between gap-8 text-large item-check dom-value   ${
                      item == activeItem ? " active" : ""
                    }`}
                  >
                    {item.label} <i className="icon icon-check-circle" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
