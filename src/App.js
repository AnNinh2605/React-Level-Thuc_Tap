import './App.scss';
import Header from './component/Header';
import TableUser from './component/TableUser';
import { ToastContainer } from 'react-toastify';
import Home from './component/Home';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<TableUser />} />
        </Routes>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
