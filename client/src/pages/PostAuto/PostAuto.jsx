import axios from "axios";

const PostAuto = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Enviando..");
  };

  return (
    <div className="container">
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="mb-3">
          <label htmlFor="placas" className="form-label">
            Placas
          </label>
          <input
            type="text"
            className="form-control"
            id="placas"
            aria-describedby="Ej.P90IOS"
            placeholder="Ej.d90iuo"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="marca" className="form-label">
            Marca
          </label>
          <input
            type="text"
            className="form-control"
            id="marca"
            placeholder="Ej.Chevrolet"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="year" className="form-label">
            Año
          </label>
          <input
            type="number"
            className="form-control"
            id="year"
            placeholder="Ej.d90iuo"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="modelo" className="form-label">
            Modelo
          </label>
          <input
            type="text"
            className="form-control"
            id="modelo"
            placeholder="Ej.Cavalier"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default PostAuto;
