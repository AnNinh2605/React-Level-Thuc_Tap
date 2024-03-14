import './App.scss';
import Header from './component/Header';
import { ToastContainer } from 'react-toastify';

import { Container } from 'react-bootstrap';
import { useContext, useEffect } from 'react';
import { UserContext } from './context/UserContext'
import AppRoutes from './routes/AppRoutes';

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
          <AppRoutes />
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
