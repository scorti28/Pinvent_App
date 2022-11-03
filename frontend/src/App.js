import {BrowserRouter, Route, Routes} from"react-router-dom"
import Sidebar from "./components/sidebar/Sidebar";
import Forgot from "./pages/auth/Forgot";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Layout from "./components/layout/Layout";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/forgot" element={<Forgot/>}/>

    <Route path="/dashboard" element={
      <Sidebar> 
        <Layout>
          <Dashboard />
        </Layout>
        </Sidebar>
    }/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
