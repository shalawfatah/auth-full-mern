import React from "react";

function CustomerList({ customers }) {


  return (
    <div>
      <ul>{customers.map((customer)=> {
          return (
              <>
              <h3>{customer.name}</h3>
              </>
          )
      })}</ul>
    </div>
  );
}

export default CustomerList;