import './App.scss';
import Header from './component/Header';
import TableUser from './component/TableUser';
import Login from './component/Login';
import { ToastContainer } from 'react-toastify';
import Home from './component/Home';
import { Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { useContext, useEffect } from 'react';
import { UserContext } from './context/UserContext'

function App() {
  const { loginContext } = useContext(UserContext);
  
  useEffect(() => {
    if(localStorage.getItem('token')){
      loginContext(localStorage.getItem('email'), localStorage.getItem('token'));
    }
  }, [])
  return (
    <>
      <div className="app-container">
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<TableUser />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
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
