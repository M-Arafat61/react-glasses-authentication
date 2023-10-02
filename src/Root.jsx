import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";

const Root = () => {
  return (
    <div className=' max-w-screen-lg m-auto space-y-10'>
      <NavBar></NavBar>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Root;
