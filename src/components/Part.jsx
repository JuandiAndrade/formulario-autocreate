import React from "react";
import "bulma/css/bulma.css";
import "./Part.css"

export default function Part(props) {
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    props.setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  return (
    <div>
      {props.required && (
        <div>
          <label>
            <div className="tit title is-6  mt-0 my-3 is-italic">{props.label}: </div>
            {props.type === "select" ? (
              <div class="control has-icons-left">
                <div class="select is-primary ">
                  <select
                    name={props.name}
                    className="tit1 select"
                    onChange={handleInputChange}
                    required={props.required}
                  >
                    <option disabled selected>🌎 País</option>
                    {props.options.map((option) => (
                      <option value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div class="icon is-small is-left">
                <i class="fas fa-globe"></i>
                </div>
              </div>
            ) : props.type === "checkbox" ? (
              <input
                type="radio"
                name={props.name}
                onChange={handleInputChange}
                required={props.required}
              />
            ) : (
              <input
                class="input is-primary"
                type={props.type}
                name={props.name}
                placeholder={props.label}
                onChange={handleInputChange}
                required={props.required}
              />
            )}
          </label>
        </div>
      )}
        <br/>
      {props.type === "submit" ? (
        <button
          class="button is-primary is-outlined"
          type="submit"
          value={props.label}
        >
          Enviar
        </button>
      ) : null}
    </div>
  );
}
