import React from "react";
import Navbar from "./Navbar";
import '../css/Products.css'

function Products() {
  var books = [{
    title: 'Your Book Title Here',
    img: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
    price: 12
  },
  {
    title: 'Your Second Book Title Here',
    img: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
    price: 10
  }
  ]

  var items = books.map((book) =>

    <div className="row text-start productscard">
      <div className="col-md-2 bookdetail">
        <img className="productsimg" src={book.img} alt="" />
      </div>

      <div className="col-md-10 bookdetail">
        <p className="productsbook">{book.title}</p>
        <p className="productsprice">PKR {book.price}</p>
        <button className="btn btn-light productscardbtn">View</button>
        {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-light productscardbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
        <button className="btn btn-light productscardbtn">Delete</button>
        <button className="btn btn-light productscardbtn addproductbtn">Add Prodcuts</button>
      </div>

      {/* <div className="col-md-6 bookdetail">
  <button className="btn btn-light productscardbtn">View</button>
  <button className="btn btn-light productscardbtn">Edit</button>
  <button className="btn btn-light productscardbtn">Delete</button>
</div> */}
    </div>


  );

  return (
    <>
      {/* <!-- Modal --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <label for="bookPrice">Book Price</label>
              <input type="number" class="form-control" id="bookPrice" placeholder="Price" />
              <br />
              <label for="booksVariants">Book Variants</label>
              <input type="number" class="form-control" id="booksVariants" placeholder="Price" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
      <div className="row justify-content-center">
        <div className="col-md-8">

          <div className="row text-end">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div class="input-group mt-5 mb-4">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" class="btn btn-outline-warning">search</button>
              </div>
            </div>
            <div className="col-md-2">
              <button className="btn productsadd"><i className="fa-solid fa-plus"></i><a className="productslink" href="/addproduct"> Add Products</a></button>

            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h5 className="productstitle">Manage Products</h5>

              {items}

            </div>
          </div>

        </div>
      </div>


    </>
  );
}

export default Products;