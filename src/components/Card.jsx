import React from "react";
import "./Card.css";

export default function Card({ name, email, birth, country }) {
  return (
    <div className="card">
      <div className="lap">
        <p className="title is-6 is-italic">🆎Nombre:</p><p className="variable title is-6">{name}.</p>
      </div>
      <div className="lap">
        <p className="title is-6 is-italic">📧Email:</p><p className="variable title is-6">{email}.</p>
      </div>
      <div className="lap">
        <p className="title is-6 is-italic">🎁Cumpleaños:</p><p className="variable title is-6">{birth}.</p>
      </div>
      <div className="lap">
        <p className="title is-6 is-italic">🌎País:</p><p className="variable title is-6">{country}.</p>
      </div>
    </div>
  );
}
