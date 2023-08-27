// import logo from './logo.svg';
// import { Component } from 'react';

import { useState } from 'react';
import './App.css';
import Modal from './components/modal';


function App() {
  const [openModal, setModalOpen] = useState(false)

  return (
    <div className="App">
      Front Beginners

      <div>
        <button onClick={() => { setModalOpen(true) }}>
          Abrir modal
        </button>
      </div>

      <Modal isOpen={openModal} setModalOpen={() => setModalOpen(!openModal)}>
        {/* <p>Oi eu sou o children e estou em teste</p> */}
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </table>

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
