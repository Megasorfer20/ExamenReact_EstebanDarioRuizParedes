
const Modal = ({ show, close }) => {


  return (
    <>
      {" "}
      {show ? (
        <div className="modalContainer">
          {" "}
          <div className="modal">
            {" "}
            <header className="modal_header">
              {" "}
              <h2 className="modal_header-title"> <h2>{data.nombre}</h2> </h2>{" "}
              <button className="close">
                {" "}
                <button className="close" onClick={() => close()}> X </button>{" "}
              </button>{" "}
            </header>{" "}
            <main className="modal_content"> 
            
          <img src={data.imagen[0]} alt={data.nombre} />
          
          <input type="number" />
          <button variant="primary">Agregar</button>
          </main>{" "}
            <footer className="modal_footer">
              {" "}
              <button className="modal-close"> Cancel </button>{" "}
              <button className="submit">Submit</button>{" "}
            </footer>{" "}
          </div>{" "}
        </div>
      ) : null}{" "}
    </>
  );
};
export default Modal;
