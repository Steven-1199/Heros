import React from "react";
import "./cartList.css";

export const CardList = (e) => (
  <div className="cardList">
    {e.ii.map((x) => (
      <div className="card" key={x.id}>
        <img className="heroimage" src={x.images.lg} />
        <h3>{x.name}</h3>
        <span className="con">
          <span className="title">FullName&nbsp;:&nbsp;</span>{" "}
          {x.biography.fullName}
        </span>
        <span className="con">
          <span className="title">Race&nbsp;: &nbsp;</span> {x.appearance.race}
        </span>
        <span className="con">
          <span className="title">Occupation&nbsp;: &nbsp;</span>{" "}
          {x.work.occupation}
        </span>
      </div>
    ))}
  </div>
);
