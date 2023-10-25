import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [services, setServices] = useState([]);
  const getServices = async () => {
    const services = await axios.get("http://localhost:3000/api/v1/servicio");
    setServices(services.data);
  };
  console.log(services);
  useEffect(() => {
    getServices();
  }, []);

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>descripcion</th>
            <th>auto</th>
            <th>fecha</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.descripcion}</td>
              <td>{service.idAuto}</td>
              <td>{service.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
