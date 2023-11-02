import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const TableAutos = () => {
  const [autos, setAutos] = useState([]);
  const getAutos = async () => {
    const autos = await axios.get("http://localhost:3000/api/v1/autos");
    setAutos(autos.data);
  };

  useEffect(() => {
    getAutos();
  }, []);

  return (
    <table className="table container">
      <thead>
        <tr>
          <th>id</th>
          <th>placas</th>
          <th>marca</th>
          <th>año</th>
          <th>modelo</th>
        </tr>
      </thead>
      <tbody>
        {autos.map((auto) => (
          <tr key={auto.id}>
            <td>{auto.id}</td>
            <td>{auto.placas}</td>
            <td>{auto.marca}</td>
            <td>{auto.año}</td>
            <td>{auto.modelo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableAutos
