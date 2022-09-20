import '../css/AddProduct.css';
import React from 'react';
import Navbar from './Navbar';

function AddProduct() {
  return (
    <>
    <Navbar/>
    <div className="row justify-content-center">
      <div className="col-md-8">
        
          <div className="row justify-content-center">
            <div className="col-md-12">
              <h3 className="sdtitle" >Add Book Details</h3>
              <form className="" action="index.html" method="post">
              <input type="text" name="name" value="" className="form-control sdform" placeholder="Book Name"/>
              <br/>
              <input type="text" name="authorName" value="" className="form-control sdform" placeholder="Author Name"/>
              <br/>
              <input type="text" name="description" value="" className="form-control sdform" placeholder="Description"/>
              <br/>
              <input type="text" name="contact" value="" className="form-control sdform" placeholder="Price"/>
              <br/>
              <button className='btn btn-light sduploadimg'><i class="fa-solid fa-upload"></i> Upload Image</button>
              </form>
            </div>
          </div>

        <div className="row justify-content-end">
          <div className='col-md-12'>
          <input type="submit" className="form-control sdform sd-submit" name="" value="Save"/>
          </div>
        </div>
      </div>
    </div> 

    </>
  );
}

export default AddProduct;