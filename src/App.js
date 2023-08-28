// import logo from './logo.svg';
// import { Component } from 'react';

import { useState, useEffect, useMemo } from 'react';
import './App.css';
import Modal from './components/modal';
import api from "./services/api";
import Table from './Table';


function App() {
  const [openModal, setModalOpen] = useState(false)
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("/users/diegosouza1290")
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  // let dataList = data.docs;

  console.log(data)

  // Colunas da nossa tabela
  const columns = useMemo(
    () => [
      {
        // Primeiro grupo - Informações do passageiro
        Header: "Informações sobre os livros",
        // Colunas do primeiro grupo
        columns: [
          {
            Header: "Nome",
            accessor: "name"
          },
          {
            Header: "Login",
            accessor: "login"
          }
        ]
      }
    ],
    []
  );

  return (
    <div className="App">
      Front Beginners

      <div>
        <button onClick={() => { setModalOpen(true) }}>
          Abrir modal
        </button>
      </div>
      {/* 
      <div className="App">
        <Table columns={columns} data={data} />
      </div> */}

      <Modal isOpen={openModal} setModalOpen={() => setModalOpen(!openModal)}>
        {/* <p>Oi eu sou o children e estou em teste</p> */}
        {/* 
        <table>
          <tr>
            <th>Usuário</th>
            <th>Biografia</th>
            <th>Data de inscrição</th>
          </tr>

          {dataList.map((item) =>
            <tr key={item.name}>{item._id}</tr>
          )}

        </table> */}
        <div className="App">
          <Table columns={columns} data={data} />
        </div>

      </Modal>
    </div>
  )
}




// class App extends Component {

//   state = {
//     name: "Diego Souza",
//     counter: 0
//   };

//   handlePclick = () => {
//     this.setState({ name: "Novo nome" });
//   }

//   handleAClick = (event) => {
//     event.preventDefault();
//     const { counter } = this.state;
//     this.setState({ counter: counter + 1 });
//   }

//   render() {
//     const { name, counter } = this.state;

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p onClick={this.handlePclick}>
//             {name} {counter}
//           </p>
//           <a
//             onClick={this.handleAClick}
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
