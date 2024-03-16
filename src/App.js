import './App.scss';
import Header from './component/Header';
import { ToastContainer } from 'react-toastify';

import { useContext, useEffect } from 'react';
// import { UserContext } from './context/UserContext'
import AppRoutes from './routes/AppRoutes';
import { useDispatch, useSelector } from 'react-redux'

import { handleRefresh } from './redux/actions/userAction'

function App() {
  const dispatch = useDispatch();
  const dataUserRedux = useSelector(state => state.user.account);
  // useContext
  // const { loginContext } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      // loginContext(localStorage.getItem('email'), localStorage.getItem('token'));
      dispatch(handleRefresh());
    }
  }, [])

  return (
    <>
      <div className="app-container">
        <Header />
        <AppRoutes />
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
