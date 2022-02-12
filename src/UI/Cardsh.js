import "./Cardsh.css";
import React from "react";
const Cardsh = (props) => {
  return (
  
      
      <div className="Cardbody">
        <div className="Cardheader">
          <img src={props.url} width="100px" height="100px"></img>
          <div className="headercontent">
            <h4 className="header">{props.Productname}</h4>
            <h4 className="header2">{props.Brand}</h4>
            <h4 className="price">$ +{props.price}</h4>
          </div>
        </div>

        <div className="locDateprop">
          <h4 className="header2">
            {props.Location.state} , {props.Location.city}
          </h4>
          <h4 className="header2">Date : {props.Date}</h4>
        </div>
        <p>{props.des} </p>
      </div>
   
  );
};
export default Cardsh;
