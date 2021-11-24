import React from "react";
import * as Icon from "react-bootstrap-icons";
import { data } from "./components/data/Constants";
import fittonia from "./components/images/fittonia.jpeg";
import moneyPlant from "./components/images/moneyplant.jpeg";
import jade from "./components/images/jade.jpeg";
import zzplant from "./components/images/zzplant.jpeg";

function App() {
  const plants = [
    {
      name: "Big Leaf Fittonia Plant",
      price: "₹325",
      image: fittonia,
      light: "Bright Indirect Light",
      watering: "Water Once A Day",
      maintenance: "Medium",
      whereToGrow: "Bright Indoor",
    },
    {
      name: "Jade Plant Mini",
      price: "₹275",
      image: jade,
      light: "Bright indirect sunlight",
      watering: "Water once a week",
      maintenance: "Low maintenance",
      whereToGrow: "Bright indoors",
    },
    {
      name: "Money Plant Golden",
      price: "₹325",
      image: moneyPlant,
      light: "Bright indirect sunlight",
      watering: "Water once a week",
      maintenance: "Low maintenance",
      whereToGrow: "Bright indoors, shaded outdoors",
    },
    {
      name: "ZZ Plant - Medium",
      price: "₹545",
      image: zzplant,
      light: "Bright indirect light",
      watering: "Water once a week",
      maintenance: "Low maintenance",
      whereToGrow: "Bright indoors, shaded outdoors",
    },
  ];
  localStorage.setItem("plants", JSON.stringify(plants));
  let plantDetails = JSON.parse(localStorage.getItem("plants"));
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row ">
          <div className="col bg-light border">
            <Icon.Flower1 size={29} />
            <strong style={{ fontSize: "1.5rem" }}>{data.CAPTION}</strong>
          </div>
          <div className="col-sm-auto bg-light">
            <button
              className="dropdown  border btn  dropdown-toggle"
              type="button"
              id="dropdownMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <Icon.List size={30} />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
              <li>
                <a className="dropdown-item" href="#">
                  {data.PLANT_PRICE}
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  {data.PLANT_LIGHT}
                </a>
              </li>
              <hr className="dropdown-divider" />
              <li>
                <a className="dropdown-item" href="#">
                  {data.PLANT_WATERING}
                </a>
              </li>
              <hr className="dropdown-divider" />
              <li>
                <a className="dropdown-item" href="#">
                  {data.PLANT_MAINTENANCE}
                </a>
              </li>
              <hr className="dropdown-divider" />
              <li>
                <a className="dropdown-item" href="#">
                  {data.PLANT_WHERETOGROW}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="d-flex h-100 min-vh-100 ">
        <div className="container-fluid">
          <div className="row">
            {plantDetails.map((item, key) => (
              <div className="col-lg-4 col-md-12 mb-1">
                <div className="card mt-1 shadow-sm bg-white h-100 d-flex flex-column ">
                  <h5 className="card-header">{item.name}</h5>
                  <img
                    src={item.image}
                    className="card-img-top img-thumbnail mt-1 h-100"
                    style={{ width: "10rem", alignSelf: "center" }}
                    alt={item.name}
                  />
                  <div className="card-body">
                    <div className="mb-2 row">
                      <label className="col-sm-4 card-text">
                        <strong>{data.PLANT_PRICE}:</strong>
                      </label>
                      <div className="col-sm-8">{item.price}</div>
                    </div>
                    <div className="mb-2 row">
                      <label className="col-sm-4 card-text">
                        <strong>{data.PLANT_LIGHT}:</strong>
                      </label>
                      <div className="col-sm-8">{item.light}</div>
                    </div>
                    <div className="mb-2 row">
                      <label className="col-sm-4 card-text">
                        <strong>{data.PLANT_WATERING}:</strong>
                      </label>
                      <div className="col-sm-8">{item.watering}</div>
                    </div>
                    <div className="mb-2 row">
                      <label className="col-sm-4 card-text">
                        <strong>{data.PLANT_MAINTENANCE}:</strong>
                      </label>
                      <div className="col-sm-8">{item.maintenance}</div>
                    </div>
                    <div className="mb-2 row">
                      <label className="col-sm-4 card-text ">
                        <strong>{data.PLANT_WHERETOGROW}:</strong>
                      </label>
                      <div className="col-sm-8">{item.whereToGrow}</div>
                    </div>
                  </div>
                  <div className="card-footer align-items-center">
                    <a href="#" className="btn align-items-center btn-primary ">
                      {data.ADD_TO_CART}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
