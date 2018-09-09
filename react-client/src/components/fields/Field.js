import React from "react";
import { Link } from "react-router-dom";

const Field = props => {
  return (
    <div style={{ maxWidth: "320px", margin: "15px" }}>
      <div className="card">
        <img
          src="https://via.placeholder.com/350x150"
          alt="placeholder"
          className="card-img-top"
        />
        <div className="card-header">Numer boiska: {props.id}</div>
        <div className="card-body">
          <h1>Nazwa: {props.name}</h1>
        </div>
        <Link to={`field/${props.id}`}>Detale</Link>
      </div>
    </div>
  );
};

export default Field;
