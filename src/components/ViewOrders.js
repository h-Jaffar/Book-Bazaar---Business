import "../css/ViewOrders.css";
import React from "react";
import Navbar from "./Navbar";

function ViewOrders() {

  var pending= [{
    title: 'Your Book Title Here',
    img:"https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
    price: 12
  },
  {
    title: 'Your Another Book Title Here',
    img:"https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
    price: 10
  }
]

var approved= [{
  title: 'Your Book Title Here',
  img:"https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
  price: 12
},
{
  title: 'Your Another Book Title Here',
  img:"https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
  price: 10
}
]

var complete= [{
  title: 'Your Book Title Here',
  img:"https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
  price: 12
},
{
  title: 'Your Another Book Title Here',
  img:"https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
  price: 10
}
]

var cancelled= [{
  title: 'Your Book Title Here',
  img:"https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
  price: 12
},
{
  title: 'Your Another Book Title Here',
  img:"https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
  price: 10
}
]


var pendingorders = pending.map((order) => 

<div className="row text-start orderscard">
<div className="col-md-2 orderdetail">
  <img className="ordersimg" src={order.img} alt=""/>
</div>

<div className="col-md-4 orderdetail">
  <p className="ordersname">{order.title}</p>
  <p className="ordersprice">PKR {order.price}</p>
</div>

<div className="col-md-6">
  <button className="btn btn-light orderscardbtn">View</button>
  <button className="btn btn-light orderscardbtn">Approve</button>
  <button className="btn btn-light orderscardbtn">Cancel</button>
</div>
</div>

);

var approvedorders = approved.map((order) => 

<div className="row text-start orderscard">
<div className="col-md-2 orderdetail">
  <img className="ordersimg" src={order.img} alt=""/>
</div>

<div className="col-md-4 orderdetail">
  <p className="ordersname">{order.title}</p>
  <p className="ordersprice">PKR {order.price}</p>
</div>

<div className="col-md-6">
  <button className="btn btn-light orderscardbtn">View</button>
  <button className="btn btn-light orderscardbtn">Complete</button>
  <button className="btn btn-light orderscardbtn">Cancel</button>
</div>
</div>

);

var completeorders = complete.map((order) => 

<div className="row text-start orderscard">
<div className="col-md-2 orderdetail">
  <img className="ordersimg" src={order.img} alt=""/>
</div>

<div className="col-md-4 orderdetail">
  <p className="ordersname">{order.title}</p>
  <p className="ordersprice">PKR {order.price}</p>
</div>

<div className="col-md-6 orderdetail text-end">
  <button className="btn btn-light orderscardbtn">View</button>
  <button className="btn btn-light orderscardbtn">Cancel</button>
</div>
</div>

);

var cancelledorders = cancelled.map((order) => 

<div className="row text-start orderscard">
<div className="col-md-2 orderdetail">
  <img className="ordersimg" src={order.img} alt=""/>
</div>

<div className="col-md-4 orderdetail">
  <p className="ordersname">{order.title}</p>
  <p className="ordersprice">PKR {order.price}</p>
</div>

<div className="col-md-6 orderdetail text-end">
  <button className="btn btn-light orderscardbtn">View</button>
  <button className="btn btn-light orderscardbtn">Delete</button>
</div>
</div>

);
  return (
    <>
      <Navbar />

      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h3 className="mt-5 orderlabel">Your Orders</h3>
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button
                class="nav-link tabbutton active"
                id="nav-pending-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-pending"
                type="button"
                role="tab"
                aria-controls="nav-pending"
                aria-selected="true"
              >
                Pending Orders
              </button>
              <button
                class="nav-link tabbutton"
                id="nav-approved-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-approved"
                type="button"
                role="tab"
                aria-controls="nav-approved"
                aria-selected="false"
              >
                Approved Orders
              </button>
              <button
                class="nav-link tabbutton"
                id="nav-complete-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-complete"
                type="button"
                role="tab"
                aria-controls="nav-complete"
                aria-selected="false"
              >
                Complete Orders
              </button>
              <button
                class="nav-link tabbutton"
                id="nav-cancelled-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-cancelled"
                type="button"
                role="tab"
                aria-controls="nav-cancelled"
                aria-selected="false"
              >
                Cancelled Orders
              </button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-pending"
              role="tabpanel"
              aria-labelledby="nav-pending-tab"
            >
              {pendingorders}
            </div>
            <div
              class="tab-pane fade"
              id="nav-approved"
              role="tabpanel"
              aria-labelledby="nav-approved-tab"
            >
              {approvedorders}
            </div>
            <div
              class="tab-pane fade"
              id="nav-complete"
              role="tabpanel"
              aria-labelledby="nav-complete-tab"
            >
              {completeorders}
            </div>
            <div
              class="tab-pane fade"
              id="nav-cancelled"
              role="tabpanel"
              aria-labelledby="nav-cancelled-tab"
            >
              {cancelledorders}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewOrders;
