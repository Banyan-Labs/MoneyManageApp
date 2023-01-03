import './App.css';
import Layout from './Components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/login/Login';
import ForgotPass from './Components/forgotPass/ForgotPass';




function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Login />} />
              <Route path="ForgotPW" element={<ForgotPass />} />
              {/* <Route path="ForgotPW" element={<ForgotPass />} />
              <Route path="ForgotPW" element={<ForgotPass />} /> */}
          </Route>
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
