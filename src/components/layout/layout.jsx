import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch } from "react-redux";
import { changeQuery } from "../../redux/slices/search";




const Layout = () => {

  
  const dispatch = useDispatch();
  // a function that takes the query from userinput and use the actionof the 
  // slicer in redux to update a store state via a slice 
  const searchFunction = (q) => {
    dispatch((changeQuery(q)))
  }
  return (
    <div >
      <Navbar searchFunction={searchFunction} />
      <main className="" >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
