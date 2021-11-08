import React from "react";
import {
  CDBFooter,
  CDBFooterLink,
  CDBBtn,
  CDBIcon,
  CDBContainer,
} from "cdbreact";
import { CBDFooter } from "cdbreact";

export const Footer = () => {
  return (
    <CDBContainer>
      <CDBFooter className="shadow">
        <div
          className="d-flex flex-column mx-auto py-5"
          style={{ width: "80%" }}
        >
          <div className="d-flex justify-content-between flex-wrap">
            <div className="align-self-center">
              <CDBFooterLink
                href="/"
                className="d-flex align-items-center p-0 text-dark"
              >
                <img alt="logo" src="/img/logo.png" width="30px" />
                <span className="ml-4 h5 font-weight-bold">Devwares</span>
              </CDBFooterLink>
            </div>
            <div
              className="d-flex justify-content-between"
              style={{ width: "40%" }}
            >
              <div>
                <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                  Devwares
                </p>
                <ul
                  style={{ listStyle: "none", cursor: "pointer", padding: "0" }}
                >
                  <CDBFooterLink href="/">Resources</CDBFooterLink>
                  <CDBFooterLink href="/">About Us</CDBFooterLink>
                  <CDBFooterLink href="/">Contact</CDBFooterLink>
                  <CDBFooterLink href="/">Blog</CDBFooterLink>
                </ul>
              </div>
              <div>
                <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                  Help
                </p>
                <ul
                  style={{ listStyle: "none", cursor: "pointer", padding: "0" }}
                >
                  <CDBFooterLink href="/">Support</CDBFooterLink>
                  <CDBFooterLink href="/">Sign Up</CDBFooterLink>
                  <CDBFooterLink href="/">Sign In</CDBFooterLink>
                </ul>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <small>&copy; Devwares, 2020. All rights reserved.</small>
            <div>
              <CDBBtn size="sm" flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn size="sm" flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn size="sm" flat color="dark">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </div>
          </div>
        </div>
      </CDBFooter>
    </CDBContainer>
  );
};
export default Footer;
