import Layout from './Components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './Components/login/Login';
import ForgotPass from './Components/forgotPass/ForgotPass';
import Register from './Components/register/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Register />} />
            <Route path="ForgotPass" element={<ForgotPass />} />
            <Route path="Register" element={<Register />} />
            {/* <Route path="AddIncome" element={<AddIncome />} /> */}
            {/* <Route path="AddBill" element={<AddBill />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
