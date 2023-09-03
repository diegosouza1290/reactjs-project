// import logo from './logo.svg';
// import { Component } from 'react';

import { useState, useEffect } from 'react';
import './App.css';
import Modal from './components/modal';
import api from "./services/api";


function App() {
  const [openModal, setModalOpen] = useState(false)
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("/movie")
      .then((response) => setData(response.data.docs))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  // console.log("data: ", data.length)

  return (
    <div className="App">
      Front Beginners

      <div>
        <button onClick={() => { setModalOpen(true) }}>
          Abrir modal
        </button>
      </div>

      <div>
        <table>
          <tr>
            <th>ID do Livro</th>
            <th>Título</th>
            <th>Detalhes</th>
          </tr>

          {data.map((item) =>
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>
                <button onClick={() => { setModalOpen(true) }}>
                  Detalhes
                </button>
              </td>
            </tr>
          )}

        </table>
      </div>

      <Modal isOpen={openModal} setModalOpen={() => setModalOpen(!openModal)}>

        <table>
          <tr>
            <th>ID do Livro</th>
            <th>Título</th>
            <th>runtimeInMinutes</th>
            <th>budgetInMillions</th>
            <th>boxOfficeRevenueInMillions</th>
            <th>academyAwardNominations</th>
            <th>academyAwardWins</th>
            <th>rottenTomatoesScore</th>
          </tr>

          {data.map((item) =>
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.runtimeInMinutes}</td>
              <td>{item.budgetInMillions}</td>
              <td>{item.boxOfficeRevenueInMillions}</td>
              <td>{item.academyAwardNominations}</td>
              <td>{item.academyAwardWins}</td>
              <td>{item.rottenTomatoesScore}</td>
            </tr>
          )}

        </table>

        <div style={{ peddingTop: "5px" }}>
          Foram encontrados: {data.length} registros
        </div>

      </Modal>
    </div>
  )
}

export default App;
