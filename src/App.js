import './App.scss';
import Header from './component/Header';
import TableUser from './component/TableUser';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <TableUser />
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
