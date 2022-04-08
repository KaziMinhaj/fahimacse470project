import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { createContext, useState } from "react";

//context api
export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({
    name: null,
    email: null, 
    photoURL: null,
    isSignedIn: false
    });
  return(
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Home/>
    </UserContext.Provider>

  ); 
};

export default App;