import TableUser from '../component/TableUser';
import Login from '../component/Login';
import Home from '../component/Home';
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from './PrivateRoutes';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path='/user'
                    element={
                        <PrivateRoutes>
                            <TableUser />
                        </PrivateRoutes>
                    }
                />
            </Routes>
        </>
    )
}
export default AppRoutes;