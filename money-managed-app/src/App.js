import './App.css';
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn'




function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<SignIn />} />
              <Route path="SignUp" element={<SignUp />} />
              <Route path="ForgotPW" element={<ForgotPW />} />
              {/* <Route path="" element={< />} />
              <Route path="" element={< />} /> */}
              {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;