import "../css/StoreDetail.css"
import React from 'react';
import Navbar from "./Navbar";

function StoreDetail() {
  return (
    <>
      <Navbar />

      <div className="row justify-content-center row-background-image">
        <div className="col-md-12 row-inside-div">
          <div className="row ">
            <div className="col-md-12 text-center">
              <h5 className="sdtitle">Edit Store Details</h5>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-12">
              <h5 className="inputtext">Store Name</h5>
              <input type="text" name="contact" value="" className="form-control profileinput" placeholder="Ali Book Store" />
            </div>
            <div className="col-md-12">
              <h5 className="inputtext">Store Email</h5>
              <input type="text" name="contact" value="" className="form-control profileinput" placeholder="alibookstore@gmail.com" />
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-12">
              <h5 className="inputtext">Store Contact Number</h5>
              <input type="text" name="contact" value="" className="form-control profileinput" placeholder="XXXX-XXXXXXX" />
            </div>
            <div className="col-md-12">
              <h5 className="inputtext">Store Address</h5>
              <input type="text" name="contact" value="" className="form-control profileinput" placeholder="2A1, PGECHS, Punjab, Pakistan" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <button className="btn btn-light btn-lg profilebutton" type="button" name="button">Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StoreDetail;
