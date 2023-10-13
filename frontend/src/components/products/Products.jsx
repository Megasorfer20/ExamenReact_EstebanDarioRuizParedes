import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Estrella from "../../Estrella.svg";
import axios from "axios";
import "./Products.css";
import Modal from "./Modal";

function Products() {
  const [defineProducts, setDefineProducts] = useState([]);
  const [stars, setStars] = useState([]);

  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  useEffect(() => {
    axios
      .get("http://localhost:5000/producto", {
        headers: {
          "Accept-Version": "1.0.0",
        },
      })
      .then((result) => {
        console.log(result.data.data);
        setDefineProducts(result.data.data);
      })
      .then(starsFunction());
  }, []);

  const starsFunction = () => {
    for (let i = 0; i < defineProducts.valoracion; i++) {
      setStars([...stars, "a"]);
    }
  };

  return (
    <>
      {defineProducts.map((data) => (
        <div className="card">
          <div className="">
            {/*<Carousel>
              {data.imagen.map( daata =>(
                <Carousel.Item>
                  <img src={data.imagen} alt={data.nombre} />
                </Carousel.Item>
              ))}
              </Carousel>*/}
            <img src={data.imagen[0]} alt={data.nombre} />
          </div>
          <div className="">
            <h2 className="">{data.nombre}</h2>
            <div>
              {/*stars.map(data=>(
                        data
                    ))*/}
              <strong>Valoración:</strong> {data.valoracion}/5
            </div>
            <p>{data.descripcion}</p>
            <div className="descuento">
              <h4>
                <strong>
                  ${" "}
                  {data.descuento > 0
                    ? data.precio -
                      Math.floor((data.precio * data.descuento) / 100)
                    : data.precio}
                </strong>
              </h4>
              {data.descuento > 0 && (
                <h4 className="reyado">$ {data.precio}</h4>
              )}
            </div>
            <button class="cssbuttons-io-button" onClick={() => Toggle()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                ></path>
              </svg>
              <span>Obtener</span>
            </button>
          </div>


          <Modal show={modal} title= "My Modal" close={Toggle} data={data}/>
        </div>
      ))}
    </>
  );
}

export default Products;
