import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import {Switch,Route} from "react-router-dom";
import Home from "./components/Home";
import AddBlog from "./components/AddBlog";
import EditBlog from "./components/EditBlog";
import Show from "./components/Show";



const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={()=><Home/> } />
        <Route  path="/add">
             <AddBlog/>
        </Route>

        <Route  path="/edit/:id">
            <EditBlog/>
        </Route>
        <Route  path="/show/:id">
           <Show/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
