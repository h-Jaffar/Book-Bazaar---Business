import React from "react";
import Navbar from "./Navbar";
import '../css/Products.css'

function Products() {
  var books= [{
    title: 'Your Book Title Here',
    img:"https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
    price: 12
  },
  {
    title: 'Your Second Book Title Here',
    img:"https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
    price: 10
  }
]

var items = books.map((book) => 

<div className="row text-start productscard">
<div className="col-md-2 bookdetail">
  <img className="productsimg" src={book.img} alt=""/>
</div>

<div className="col-md-4 bookdetail">
  <p className="productsbook">{book.title}</p>
  <p className="productsprice">PKR {book.price}</p>
</div>

<div className="col-md-6 bookdetail">
  <button className="btn btn-light productscardbtn">View</button>
  <button className="btn btn-light productscardbtn">Edit</button>
  <button className="btn btn-light productscardbtn">Delete</button>
</div>
</div>

);

    return (
      <>
        <Navbar/>
        <div className="row justify-content-center">
          <div className="col-md-8">

            <div className="row text-end">
              <div className="col-md-12">
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