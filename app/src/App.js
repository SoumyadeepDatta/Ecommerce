import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./components/Product";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import { useAuthContext } from "./hooks/useAuthContext";
import Cart from "./components/Cart";

function App() {
  const { user } = useAuthContext();
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:id">
            <Product />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create">
            <SignUp />
          </Route>
          <Route path="/profile/:id">
            {user && <Profile />}
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
